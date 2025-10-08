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

  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = ["home", "bio", "photos", "latest-video", "gear", "store", "contact"];
    
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
        <nav className="mt-4 flex items-center justify-center px-2 py-2">
          <ul className="hidden md:flex gap-6 text-base font-bold relative group">
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
                        className={`transition-all duration-300 cursor-pointer block h-10 px-3 flex items-center relative group text-black font-bold hover:text-black hover:scale-125 hover:drop-shadow-[0_0_25px_rgba(0,0,0,1)] hover:z-10`}
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
                <span
                  className="absolute bottom-0 h-0.5 bg-black transition-all duration-250"
                  style={{
                    left: `${underlineStyle.left}px`,
                    width: `${underlineStyle.width}px`,
                  }}
                />
              </>
            ) : (
              pageLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`transition-all duration-300 block h-10 px-3 flex items-center relative group text-black font-bold hover:text-black hover:scale-125 hover:drop-shadow-[0_0_25px_rgba(0,0,0,1)] hover:z-10`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
