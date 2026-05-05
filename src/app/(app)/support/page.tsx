'use client'
import PageHeader from '@/components/PageHeader'
import { Heart, ShieldCheck, Zap, Globe } from 'lucide-react'

export default function SupportPage() {
  return (
    <div className="pb-10 min-h-dvh">
      <PageHeader title="Wesprzyj nas" back />

      <div className="px-4 mt-4">
        <div className="card bg-white p-8 mb-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
          
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-gold mx-auto mb-6"
            style={{ background: '#FAF6F0', border: '2px solid var(--gold)', boxShadow: '0 8px 30px rgba(201,162,39,0.15)' }}>
            <Heart size={36} fill="currentColor" />
          </div>

          <h1 className="text-2xl font-mystic font-bold text-text-main mb-4">Budujmy wspólnie ChristianityHub</h1>
          
          <p className="text-sm text-text-muted leading-relaxed mb-8 max-w-md mx-auto">
            Nasza aplikacja powstała z pasji i chęci łączenia wiernych w codziennej modlitwie. 
            Twoje wsparcie finansowe pozwala nam utrzymać serwery, zapewniać bezpieczeństwo danych 
            i rozwijać nowe funkcje, które służą tysiącom osób.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Zap, title: 'Rozwój', desc: 'Nowe narzędzia modlitewne' },
              { icon: ShieldCheck, title: 'Stabilność', desc: 'Utrzymanie serwerów' },
              { icon: Globe, title: 'Zasięg', desc: 'Dotarcie do nowych osób' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl bg-bg-primary/50 border border-border">
                <item.icon size={20} className="text-gold mx-auto mb-2" />
                <h3 className="text-xs font-bold text-text-main uppercase tracking-wider">{item.title}</h3>
                <p className="text-[10px] text-text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6 py-6 border-t border-border">
            <p className="text-sm font-bold text-gold-dark uppercase tracking-[0.2em]">Wybierz kwotę wsparcia</p>
            
            <div className="flex justify-center min-h-[44px] w-full">
                <div dangerouslySetInnerHTML={{ __html: `
                    <stripe-buy-button
                        buy-button-id="buy_btn_1TTm6UFxZrs8CnTNkad76qEo"
                        publishable-key="pk_live_51TAGOrFxZrs8CnTNwe1dL9P7z2lCaqTuMIE5N3cbbxxRWsb3mxxTHEBsvmhR5WnRcHgLriAsuRVSHQ2sebbIIdkD00RLzqowhh"
                    ></stripe-buy-button>
                ` }} />
            </div>
            
            <p className="text-[10px] text-text-muted italic">
              Bezpieczna płatność obsługiwana przez Stripe. Bóg zapłać!
            </p>
          </div>
        </div>

        <div className="card p-6 bg-gold/5 border-dashed border-gold/30 text-center">
            <p className="text-xs text-text-muted">
                Masz pytania dotyczące wsparcia lub sugestie rozwoju? <br/>
                Napisz do nas: <span className="font-bold text-gold-dark">kontakt@christianityhub.pl</span>
            </p>
        </div>
      </div>
    </div>
  )
}
