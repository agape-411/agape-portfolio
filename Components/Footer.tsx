"use client";

import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

const socials = [
  {
    icon: Mail,
    href: "mailto:korrokagape@gmail.com",
  },
  
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#062E33_0%,#041F22_100%)] border-t border-white/10">

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-400/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-7 sm:py-8">

        <div className="flex flex-col items-center justify-center text-center">

          {/* BRAND */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">

            <span className="bg-[linear-gradient(135deg,#ffffff_0%,#B6FFF7_40%,#6EE7D8_100%)] bg-clip-text text-transparent">
              Agape
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-white/65">

            Designing and developing premium digital experiences with
            scalable architecture, clean UI systems,
            and high-performance web technologies.

          </p>

          {/* SOCIALS */}
          <div className="mt-7 flex items-center gap-4">

            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10
rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >

                <Icon size={16} />

              </a>
            ))}

          </div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-white/10 my-6 sm:my-8" />

          {/* BOTTOM */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left">

              © {new Date().getFullYear()} Agape. All rights reserved.

            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group inline-flex items-center gap-2 text-[13px] text-white/60 hover:text-white transition-colors duration-300"
            >

              Back to Top

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}