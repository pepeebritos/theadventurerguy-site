'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const pageLinks = [
  { href: "/films", label: "Films" },
  { href: "/photos", label: "Photos" },
  { href: "/guides", label: "Guides" },
  { href: "/gear", label: "Gear" },
  { href: "/store", label: "Store" },
  { href: "/media-kit", label: "Media Kit" },
  { href: "/contact", label: "Contact" },
];

const homeFragmentLinks = [
  { href: "#home", label: "Home" },
  { href: "#bio", label: "Bio" },
  { href: "#photos", label: "Photos" },
  { href: "#latest-video", label: "Films" },
  { href: "#guides", label: "Guides" },
  { href: "#gear", label: "My Gear" },
  { href: "#store", label: "Store" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = ["home", "bio", "photos", "latest-video", "guides", "gear", "store", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isHomePage]);

  // Update underline position
  useEffect(() => {
    const updateUnderline = () => {
      if (!isHomePage) return;

      const activeIndex = homeFragmentLinks.findIndex(
        (l) => l.href.replace("#", "") === activeSection
      );

      if (activeIndex !== -1 && linksRef.current[activeIndex]) {
        const activeLink = linksRef.current[activeIndex];
        const parent = activeLink?.parentElement?.parentElement;

        if (activeLink && parent) {
          const parentRect = parent.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          
          setUnderlineStyle({
            left: linkRect.left - parentRect.left,
            width: linkRect.width,
          });
        }
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);

    return () => {
      window.removeEventListener("resize", updateUnderline);
    };
  }, [activeSection, isHomePage]);

  const handleFragmentClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const scrollContainer = document.getElementById("page-scroll");
    const element = document.getElementById(id);
    
    if (element && scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollTop = scrollContainer.scrollTop;
      const targetScroll = scrollTop + (elementRect.top - containerRect.top);
      
      scrollContainer.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-[var(--safe-top)]">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between md:justify-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative z-50 md:hidden transition-all duration-200 p-3 rounded-lg ${
              mobileMenuOpen 
                ? 'bg-white text-black shadow-2xl border-2 border-white' 
                : 'bg-white text-black hover:bg-neutral-50 shadow-lg'
            }`}
            style={mobileMenuOpen ? { 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(255, 255, 255, 1)' 
            } : {}}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu with Professional Background Box */}
          <div className="hidden md:block">
            <div 
              className="inline-flex items-center rounded-full"
              style={{ 
                backgroundColor: '#ffffff',
                padding: '10px 20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
              }}
            >
              <ul className="flex gap-4 text-sm font-semibold relative group">
            {isHomePage ? (
              <>
                {homeFragmentLinks.map((l, index) => {
                  const active = activeSection === l.href.replace("#", "");
                  return (
                    <li key={l.href}>
                      <a
                        ref={(el) => {
                          linksRef.current[index] = el;
                        }}
                        href={l.href}
                        onClick={(e) => handleFragmentClick(e, l.href)}
                        className={`transition-all duration-200 cursor-pointer block h-9 px-4 flex items-center rounded-lg text-neutral-700 font-semibold ${
                          active 
                            ? 'bg-neutral-100 text-neutral-900' 
                            : 'hover:bg-neutral-50 hover:text-neutral-900'
                        }`}
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </>
            ) : (
              pageLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`transition-all duration-200 block h-9 px-4 flex items-center rounded-lg text-neutral-700 font-semibold ${
                        active 
                          ? 'bg-neutral-100 text-neutral-900' 
                          : 'hover:bg-neutral-50 hover:text-neutral-900'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })
            )}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black/95 z-40 pt-20">
              <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold">
                {isHomePage ? (
                  homeFragmentLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={(e) => {
                          handleFragmentClick(e, l.href);
                          setMobileMenuOpen(false);
                        }}
                        className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))
                ) : (
                  pageLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white hover:text-neutral-300 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
