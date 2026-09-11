import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { newsArticles } from '@/lib/data'

export async function generateStaticParams() {
  return newsArticles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = newsArticles.find(a => a.slug === slug)
  return { title: article?.title || 'News' }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = newsArticles.find(a => a.slug === slug)
  if (!article) notFound()

  const related = newsArticles.filter(a => a.slug !== slug).slice(0, 3)

  return (
    <>
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site max-w-3xl">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors" style={{color:'rgba(255,255,255,0.5)'}}>
            <ArrowLeft size={14} /> All News
          </Link>
          <span className="text-[10px] tracking-[0.3em] uppercase mb-4 inline-block" style={{color:'var(--color-terracotta)'}}>{article.category}</span>
          <h1 className="font-serif text-3xl md:text-5xl text-white mb-4" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',lineHeight:1.1}}>
            {article.title}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm" style={{color:'rgba(255,255,255,0.5)'}}>{article.author}</span>
            <span style={{color:'rgba(255,255,255,0.2)'}}>·</span>
            <span className="text-sm" style={{color:'rgba(255,255,255,0.5)'}}>
              {new Date(article.date).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}
            </span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site max-w-3xl">
          {/* Cover image */}
          <div className="aspect-video w-full mb-10 flex items-center justify-center" style={{background:'linear-gradient(135deg,#E2DAD0,#C4BAA8)'}}>
            <p className="text-xs tracking-widest uppercase" style={{color:'var(--color-sand)'}}>Photo Placeholder — replace with official image</p>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            {article.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-base leading-relaxed mb-5" style={{color:'var(--color-muted)'}}>
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 p-4 text-xs border" style={{background:'var(--color-cream)',borderColor:'var(--color-stone)',color:'var(--color-muted)'}}>
            ℹ️ This is placeholder content for demonstration purposes. Replace with verified, officially approved content from Anfeh Municipality.
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16" style={{background:'var(--color-cream)',borderTop:'1px solid var(--color-stone)'}}>
        <div className="container-site">
          <h2 className="font-serif text-2xl mb-8" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>More News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{background:'var(--color-stone)'}}>
            {related.map((a)=>(
              <Link key={a.id} href={`/news/${a.slug}`} className="bg-white p-5 flex flex-col gap-2 group">
                <span className="text-[10px] tracking-[0.25em] uppercase" style={{color:'var(--color-terracotta)'}}>{a.category}</span>
                <h3 className="font-medium text-sm" style={{color:'var(--color-charcoal)'}}>{a.title}</h3>
                <p className="text-[10px]" style={{color:'var(--color-limestone)'}}>{new Date(a.date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
