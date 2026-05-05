export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF6F0]">
      <div className="relative">
        {/* Animated Cross / Logo */}
        <div className="w-24 h-24 rounded-[2rem] bg-white border border-gold/20 shadow-[0_10px_40px_rgba(201,162,39,0.1)] flex items-center justify-center text-4xl animate-pulse-gold relative z-10">
          <span className="text-gold">✝</span>
        </div>
        
        {/* Decorative Rings */}
        <div className="absolute inset-0 -m-4 border-2 border-gold/5 rounded-[3rem] animate-ping opacity-20"></div>
        <div className="absolute inset-0 -m-8 border border-gold/5 rounded-[4rem] animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="mt-12 text-center space-y-4 px-6 animate-fade-in">
        <h2 className="text-2xl font-mystic font-bold text-gold-gradient">ChristianityHub</h2>
        <div className="flex flex-col items-center">
            <div className="h-1 w-48 bg-gold/10 rounded-full overflow-hidden">
                <div className="h-full bg-gold-gradient w-1/2 animate-[shimmer_2s_infinite_linear]" style={{ backgroundSize: '200% 100%' }}></div>
            </div>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-gold/40 animate-pulse">
                Inskrypcja Wiary...
            </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-[9px] font-medium text-text-muted opacity-40 uppercase tracking-widest">
            Twoja przestrzeń modlitwy
        </p>
      </div>
    </div>
  )
}
