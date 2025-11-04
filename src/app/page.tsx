import Section from "@/components/Section";
import Bio from "@/components/Bio";
import PhotoGrid from "@/components/PhotoGrid";
import HomeHero from "@/components/HomeHero";
import GearSection from "@/components/GearSection";
import ContactForm from "@/components/ContactForm";
import YouTubeVideo from "@/components/YouTubeVideo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="page-scroll" className="h-screen overflow-y-auto scroll-smooth snap-y snap-proximity">
        {/* Hero with dual video crossfade */}
        <Section id="home" className="snap-start">
          <HomeHero
            videos={[
              { src: "/videos/hero1.mp4", poster: "/videos/hero1.jpg" },
              { src: "/videos/hero2.mp4", poster: "/videos/hero2.jpg" },
              { src: "/videos/hero3.mp4", poster: "/videos/hero3.jpg" },
            ]}
            mobileVideos={[
              { src: "/videos/mobile-hero1.mp4", poster: "" },
              { src: "/videos/mobile-hero2.mp4", poster: "" },
              { src: "/videos/mobile-hero3.mp4", poster: "" },
            ]}
            title=""
            subtitle=""
            containerId="page-scroll"
          />
        </Section>

        {/* Light sections below */}
        <Section id="bio" className="flex items-center bg-white snap-start">
          <div className="text-neutral-900 w-full">
            <Bio />
          </div>
        </Section>

        <Section id="photos" className="flex items-center justify-center bg-neutral-300 pt-20 snap-start">
          <div className="text-neutral-900 w-full">
            <PhotoGrid />
          </div>
        </Section>

        <Section id="latest-video" className="flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 pt-20 snap-start">
          <div className="w-full max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-neutral-900">Videos</h2>
                  <div className="ml-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <YouTubeVideo 
                videoId="Bob14wG-bR4" 
                title=""
                description=""
              />
              <div className="text-center mt-8">
                <a 
                  href="https://www.youtube.com/@theadventurerguy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
                >
                  View All Films
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="guides" className="flex flex-col bg-gradient-to-br from-blue-50 to-cyan-100 snap-start pt-32">
          <div className="w-full max-w-4xl mx-auto p-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
                Guides
              </h2>
              
              {/* Icon */}
              <div className="ml-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center pb-32">
            <div className="w-full max-w-4xl mx-auto p-6 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                Full guides coming soon!
              </h3>
            </div>
          </div>
        </Section>

        <Section id="gear" className="flex items-center justify-center bg-neutral-100 snap-start">
          <div className="text-neutral-900 w-full max-w-6xl mx-auto p-6">
            <GearSection />
          </div>
        </Section>

        <Section id="store" className="flex flex-col bg-gradient-to-br from-amber-50 to-orange-100 snap-start pt-32">
          <div className="w-full max-w-4xl mx-auto p-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
                Store
              </h2>
              
              {/* Icon */}
              <div className="ml-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center pb-32">
            <div className="w-full max-w-4xl mx-auto p-6 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                Coming Soon
              </h3>
              
              <p className="text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto">
                I&apos;m working on something special for you. The store will feature curated gear, prints, and exclusive content from my adventures.
              </p>
            </div>
          </div>
        </Section>

        <section id="contact" className="relative bg-white pt-20 pb-20">
          <div className="text-neutral-900 w-full max-w-4xl mx-auto p-6">
            <ContactForm />
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}

