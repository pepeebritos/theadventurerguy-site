import PageContainer from "@/components/PageContainer";
import YouTubeVideo from "@/components/YouTubeVideo";

export default function FilmsPage() {
  return (
    <PageContainer>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Films</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Cinematic outdoor adventures and travel stories captured through the lens of exploration.
          </p>
        </div>

        {/* Latest Video Section */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">My Last Video</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <YouTubeVideo 
              videoId="Bob14wG-bR4" 
              title=""
              description=""
            />
          </div>
        </section>

        {/* Video Gallery */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Recent Films</h2>
            <p className="text-white/70">Explore more of my cinematic work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* You can add more videos here */}
            <YouTubeVideo 
              videoId="VIDEO_ID_1" 
              title="Adventure Film 1"
              description="Short description"
              thumbnail
            />
            <YouTubeVideo 
              videoId="VIDEO_ID_2" 
              title="Adventure Film 2"
              description="Short description"
              thumbnail
            />
            <YouTubeVideo 
              videoId="VIDEO_ID_3" 
              title="Adventure Film 3"
              description="Short description"
              thumbnail
            />
          </div>
        </section>

        {/* YouTube Channel CTA */}
        <section className="text-center bg-neutral-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">More Adventures on YouTube</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Subscribe to my YouTube channel for regular cinematic outdoor content, 
            behind-the-scenes footage, and adventure stories from around the world.
          </p>
          <a 
            href="https://www.youtube.com/@theadventurerguy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </section>
      </div>
    </PageContainer>
  );
}
