// Direct Supabase REST API client — no WebSocket, works in all server environments

function getConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key || url.includes('placeholder')) {
    throw new Error('Supabase not configured')
  }
  return { url, key }
}

type SupabaseRow = Record<string, unknown>

interface QueryBuilder {
  select: (cols?: string) => QueryBuilder
  insert: (data: SupabaseRow | SupabaseRow[]) => QueryBuilder
  update: (data: SupabaseRow) => QueryBuilder
  eq: (col: string, val: unknown) => QueryBuilder
  order: (col: string, opts?: { ascending: boolean }) => QueryBuilder
  then: (resolve: (result: { data: SupabaseRow[] | null; error: { message: string } | null }) => void) => Promise<void>
}

function buildQuery(table: string, method: string, body?: unknown): QueryBuilder {
  const state = {
    filters: [] as string[],
    order: '',
    method,
    body,
  }

  const builder: QueryBuilder = {
    select(cols = '*') {
      state.method = 'GET'
      if (cols !== '*') state.filters.push(`select=${cols}`)
      return builder
    },
    insert(data) {
      state.method = 'POST'
      state.body = data
      return builder
    },
    update(data) {
      state.method = 'PATCH'
      state.body = data
      return builder
    },
    eq(col, val) {
      state.filters.push(`${col}=eq.${val}`)
      return builder
    },
    order(col, opts = { ascending: true }) {
      state.order = `${col}.${opts.ascending ? 'asc' : 'desc'}`
      return builder
    },
    then(resolve) {
      const { url, key } = getConfig()
      let path = `${url}/rest/v1/${table}`
      const params = [...state.filters]
      if (state.order) params.push(`order=${state.order}`)
      if (params.length) path += '?' + params.join('&')

      const headers: Record<string, string> = {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: state.method === 'POST' ? 'return=minimal' : 'return=representation',
      }

      return fetch(path, {
        method: state.method,
        headers,
        body: state.body ? JSON.stringify(state.body) : undefined,
        cache: 'no-store',
      })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text()
            return resolve({ data: null, error: { message: `${res.status}: ${text}` } })
          }
          const text = await res.text()
          const data = text ? JSON.parse(text) : []
          return resolve({ data: Array.isArray(data) ? data : [data], error: null })
        })
        .catch((err) => {
          resolve({ data: null, error: { message: err.message } })
        })
    },
  }

  return builder
}

export function getDb() {
  return {
    from: (table: string) => ({
      select: (cols = '*') => buildQuery(table, 'GET').select(cols),
      insert: (data: SupabaseRow | SupabaseRow[]) => buildQuery(table, 'POST').insert(data),
      update: (data: SupabaseRow) => buildQuery(table, 'PATCH').update(data),
    }),
  }
}
