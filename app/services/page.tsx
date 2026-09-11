'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, FileText, AlertTriangle, Archive, MessageSquare, Lightbulb, Phone, CheckCircle } from 'lucide-react'
import { submitServiceRequest } from '@/lib/actions/services'

const iconMap: Record<string, React.ElementType> = {
  FileText, AlertTriangle, Archive, MessageSquare, Lightbulb, Phone
}

const services = [
  {id:'1',type:'request',title:'Submit a Request',description:'Submit a formal request to the municipality for services, information or assistance.',icon:'FileText',color:'navy',details:'Use this form for general requests, information enquiries, or to request a specific municipal service.'},
  {id:'2',type:'report',title:'Report an Issue',description:'Report road damage, lighting problems, waste, water or any public concern.',icon:'AlertTriangle',color:'terracotta',href:'/report'},
  {id:'3',type:'documents',title:'Municipal Documents',description:'Access official municipal documents, bylaws, plans and public records.',icon:'Archive',color:'blue',details:'Request access to official municipal documents, budgets, meeting minutes and public records.'},
  {id:'4',type:'permits',title:'Permits',description:'Apply for construction, renovation, event or business permits.',icon:'FileText',color:'olive',details:'Submit permit applications for construction, events or business activities within the municipality.'},
  {id:'5',type:'complaint',title:'File a Complaint',description:'Formally submit a complaint regarding municipal services or public matters.',icon:'MessageSquare',color:'navy',details:'Use this form to submit a formal complaint about municipal services, public infrastructure or administration.'},
  {id:'6',type:'suggestion',title:'Suggestions',description:'Share your ideas to help improve services and quality of life in Anfeh.',icon:'Lightbulb',color:'blue',details:'We welcome ideas and suggestions from residents to improve services and the quality of life in Anfeh.'},
  {id:'7',type:'contact',title:'Contact Municipality',description:'Get in touch directly with the municipal office.',icon:'Phone',color:'navy',href:'/contact'},
]

function ServiceForm({type, title, onClose}: {type: string, title: string, onClose: ()=>void}) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [reference, setReference] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const result = await submitServiceRequest({
        type,
        fullName: data.get('fullName') as string,
        phone: (data.get('phone') as string) || undefined,
        email: (data.get('email') as string) || undefined,
        requestType: (data.get('requestType') as string) || undefined,
        message: data.get('message') as string,
      })
      setReference(result.reference)
      setSubmitted(true)
    } catch {
      setError('Failed to submit request. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle size={40} className="mx-auto mb-4" style={{color:'var(--color-olive)'}} />
      <h3 className="font-serif text-2xl mb-2" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>Request Submitted</h3>
      <p className="text-sm mb-2" style={{color:'var(--color-muted)'}}>The municipality will review your request and respond as soon as possible.</p>
      {reference && <p className="text-xs font-mono mb-6" style={{color:'var(--color-limestone)'}}>Reference: {reference}</p>}
      <button onClick={onClose} className="btn-primary">Close</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div><label className="form-label">Full Name *</label><input name="fullName" type="text" className="form-input" placeholder="Your full name" required /></div>
      <div className="grid grid-cols-2 gap-3">
        <div><label className="form-label">Phone</label><input name="phone" type="tel" className="form-input" placeholder="Phone number" /></div>
        <div><label className="form-label">Email</label><input name="email" type="email" className="form-input" placeholder="Email address" /></div>
      </div>
      <div>
        <label className="form-label">Request Type *</label>
        <select name="requestType" className="form-input" required style={{cursor:'pointer'}}>
          <option value="">Select type</option>
          <option>General Request</option>
          <option>Information</option>
          <option>Service Request</option>
          <option>Other</option>
        </select>
      </div>
      <div><label className="form-label">Message *</label><textarea name="message" className="form-input" rows={4} placeholder="Describe your request in detail..." required /></div>
      {error && <p className="text-sm" style={{color:'var(--color-terracotta)'}}>{error}</p>}
      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={loading} className="btn-primary flex-1 justify-center" style={{opacity:loading?0.6:1}}>
          {loading?'Submitting...':'Submit Request'}
        </button>
        <button type="button" onClick={onClose} className="btn-ghost">Cancel</button>
      </div>
    </form>
  )
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null)

  return (
    <>
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/">Home</Link> / Services
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-3" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            Municipal Services
          </h1>
          <p className="text-base max-w-xl" style={{color:'rgba(255,255,255,0.6)'}}>
            Access all municipal services in one place. Submit requests, report issues and connect with the municipality.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service)=>{
              const Icon = iconMap[service.icon] || FileText
              return (
                <div key={service.id} className="card bg-white p-6 flex flex-col">
                  <div className="w-12 h-12 border flex items-center justify-center mb-5 flex-none" style={{borderColor:'var(--color-stone)'}}>
                    <Icon size={20} style={{color:service.type==='report'?'var(--color-terracotta)':service.type==='suggestion'?'var(--color-blue)':service.type==='permits'?'var(--color-olive)':'var(--color-navy)'}} />
                  </div>
                  <h3 className="font-medium mb-2" style={{color:'var(--color-charcoal)'}}>{service.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{color:'var(--color-muted)'}}>{service.description}</p>
                  {service.href ? (
                    <Link href={service.href} className="btn-primary text-xs justify-center">
                      {service.title} <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <button onClick={()=>setActiveService(service)} className="btn-primary text-xs justify-center">
                      {service.title} <ArrowRight size={13} />
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{background:'rgba(26,46,74,0.7)'}}>
          <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-6 border-b" style={{borderColor:'var(--color-stone)'}}>
              <h2 className="font-serif text-2xl" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>
                {activeService.title}
              </h2>
            </div>
            <div className="p-6">
              <ServiceForm type={activeService.type} title={activeService.title} onClose={()=>setActiveService(null)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
