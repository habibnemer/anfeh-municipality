'use client'

import { useEffect } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-4 shadow-xl animate-fade-up max-w-sm w-full mx-4 ${
      type === 'success' ? 'bg-navy text-white' : 'bg-red-600 text-white'
    }`}>
      {type === 'success' ? (
        <CheckCircle size={18} className="flex-none" />
      ) : (
        <XCircle size={18} className="flex-none" />
      )}
      <p className="text-sm flex-1">{message}</p>
      <button onClick={onClose} className="flex-none opacity-70 hover:opacity-100 transition-opacity">
        <X size={16} />
      </button>
    </div>
  )
}
