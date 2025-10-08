import PageContainer from "@/components/PageContainer";

export default function StorePage() {
  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>

          {/* Coming Soon Text */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Coming Soon
          </h1>
          
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            I'm working on something special for you. The store will feature curated gear, prints, and exclusive content from my adventures.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>

          {/* Additional Info */}
          <p className="text-white/60 text-sm">
            Stay tuned on{' '}
            <a 
              href="https://instagram.com/theadventurerguy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              Instagram
            </a>
            {' '}and{' '}
            <a 
              href="https://www.youtube.com/@theadventurerguy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              YouTube
            </a>
            {' '}for updates
          </p>
        </div>
      </div>
    </PageContainer>
  );
}

