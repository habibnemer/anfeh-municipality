export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Auth is handled by middleware.ts — this layout is just a shell
  return <>{children}</>
}
