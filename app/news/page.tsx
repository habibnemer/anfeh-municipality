import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { newsArticles } from '@/lib/data'

export const metadata: Metadata = { title: 'News' }

export default function NewsPage() {
  const featured = newsArticles.find(a => a.featured)
  const rest = newsArticles.filter(a => !a.featured)

  return (
    <>
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/">Home</Link> / News
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-3" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            Municipal News
          </h1>
          <p className="text-base max-w-xl" style={{color:'rgba(255,255,255,0.6)'}}>
            Official news, updates and stories from Anfeh Municipality.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div style={{background:'var(--color-cream)',borderBottom:'1px solid var(--color-stone)'}}>
        <div className="container-site">
          <div className="flex gap-0 overflow-x-auto">
            {['All','Municipality','Community','Projects','Announcements'].map((cat)=>(
              <Link key={cat} href={`/news?category=${cat.toLowerCase()}`}
                className="px-5 py-4 text-xs tracking-widest uppercase whitespace-nowrap transition-colors border-b-2"
                style={{borderBottomColor:cat==='All'?'var(--color-navy)':'transparent',color:cat==='All'?'var(--color-navy)':'var(--color-muted)'}}>
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">

          {/* Featured */}
          {featured && (
            <Link href={`/news/${featured.slug}`} className="block mb-10 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border" style={{borderColor:'var(--color-stone)'}}>
                <div className="overflow-hidden" style={{minHeight:300,maxHeight:400}}>
                  {featured.image ? (
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{height:380}} loading="lazy" />
                  ) : (
                    <div className="img-placeholder" style={{height:380}} />
                  )}
                </div>
                <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-[9px] tracking-[0.3em] uppercase font-medium mb-4 inline-block px-2 py-0.5" style={{background:'var(--color-terracotta)',color:'white'}}>Featured</span>
                  <span className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{color:'var(--color-terracotta)'}}>{featured.category}</span>
                  <h2 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-blue-700 transition-colors" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>{featured.title}</h2>
                  <p className="text-sm leading-relaxed mb-5" style={{color:'var(--color-muted)'}}>{featured.excerpt}</p>
                  <div className="flex items-center justify-between pt-5 border-t" style={{borderColor:'var(--color-stone)'}}>
                    <span className="text-xs" style={{color:'var(--color-limestone)'}}>{new Date(featured.date).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</span>
                    <ArrowRight size={14} style={{color:'var(--color-limestone)'}} />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{background:'var(--color-stone)'}}>
            {rest.map((article)=>(
              <Link key={article.id} href={`/news/${article.slug}`} className="bg-white p-6 flex flex-col group">
                <div className="mb-5 overflow-hidden" style={{height:180}}>
                  {article.image ? (
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full img-placeholder" />
                  )}
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{color:'var(--color-terracotta)'}}>{article.category}</span>
                <h3 className="font-medium text-sm leading-snug mb-2 flex-1 group-hover:text-navy transition-colors" style={{color:'var(--color-charcoal)'}}>{article.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{color:'var(--color-muted)'}}>{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t" style={{borderColor:'var(--color-stone)'}}>
                  <span className="text-[10px]" style={{color:'var(--color-limestone)'}}>{new Date(article.date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</span>
                  <ArrowRight size={13} style={{color:'var(--color-limestone)'}} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
