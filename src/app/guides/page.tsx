import PageContainer from "@/components/PageContainer";

export default function GuidesPage() {
  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Guides
          </h1>
          
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Full guides coming soon!
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
