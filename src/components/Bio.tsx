import Image from "next/image";

export default function Bio() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-neutral-200 rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/pedro1.jpeg"
              alt="Pedro Britos"
              width={800}
              height={1000}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-4 text-neutral-900">The Adventurer Guy</h2>
              <p className="text-base text-neutral-700 mb-6">
                Filmmaker and outdoor storyteller
              </p>
            </div>
            <div className="text-base text-neutral-700 leading-relaxed space-y-6 flex-1">
              <p>
                My name is Pedro Britos. I was born and raised in Buenos Aires, Argentina, and moved to California&apos;s Bay Area at 17. I&apos;ve always lived outside, first through sports like soccer, rugby, and tennis, then later skateboarding, snowboarding, wakeskating, and kitesurfing. Weekend camping trips with my dad sparked a love for wild places; the Sierra Nevada sealed it. I started hiking, discovered backpacking, and eventually brought a camera to capture what it feels like to be out there.
              </p>
              <p>
                Today I make cinematic outdoor stories, practical travel guides, and honest gear breakdowns to help people plan real trips and feel confident outside. You&apos;ll see a lot of Yosemite, the Eastern Sierra, and the California coast, routes, campsites, simple recipes, and the ultralight kits that make long miles easier. I share weekly reels with a 115k+ community (50M+ lifetime views) and collaborate with outdoor and creator-tech brands on films and UGC projects that keep things authentic and useful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
