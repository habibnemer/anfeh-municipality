'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginAdmin } from '@/lib/actions/admin'
import { Lock } from 'lucide-react'

export default function AdminLoginPage() {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const result = await loginAdmin(pin)
      if (result.success) {
        router.push('/admin')
        router.refresh()
      } else {
        setError(result.error || 'Incorrect PIN')
        setPin('')
      }
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{background:'#FAF8F5'}}>
      <div className="w-full max-w-sm px-6">
        <div className="text-center mb-10">
          <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center" style={{background:'#1A2E4A'}}>
            <Lock size={22} color="white" />
          </div>
          <p className="font-serif text-3xl mb-1" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'#1A2E4A'}}>
            Admin Access
          </p>
          <p className="text-sm" style={{color:'#6B6B6B'}}>Anfeh Municipality Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="form-label">Admin PIN</label>
            <input
              type="password"
              value={pin}
              onChange={e => setPin(e.target.value)}
              className="form-input text-center text-2xl tracking-[0.5em]"
              placeholder="••••••"
              maxLength={12}
              required
              autoFocus
            />
          </div>
          {error && (
            <p className="text-xs text-center" style={{color:'#B85C38'}}>{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || pin.length < 4}
            className="btn-primary w-full justify-center"
            style={{opacity: loading || pin.length < 4 ? 0.6 : 1}}
          >
            {loading ? 'Verifying…' : 'Enter Dashboard'}
          </button>
        </form>
      </div>
    </div>
  )
}
