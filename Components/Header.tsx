"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import Image from "next/image";

const navLinks = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Reviews",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        pt-4
      "
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-5 md:px-7">
        {/* FLOATING NAVBAR */}
        <div
          className="
            h-[72px]

            rounded-[24px]

            border
            border-white/70

            bg-white/80
            backdrop-blur-2xl

            shadow-[0_8px_40px_rgba(15,23,42,0.08)]

            flex
            items-center
            justify-between

            px-4
            md:px-8
          "
        >
          {/* LOGO + NAME */}
<button
  onClick={() => scrollTo("home")}
  className="
    flex
    items-center
    gap-2
    sm:gap-3
    shrink-0
    min-w-0
  "
>
  <Image
    src="/images/logo.png"
    alt="Agape Logo"
    width={48}
    height={48}
    priority
    className="
      w-10
      h-10
      sm:w-11
      sm:h-11
      md:w-12
      md:h-12
      object-contain
      shrink-0
    "
  />

  <span
  className="
    text-base
    sm:text-lg
    md:text-xl
    lg:text-2xl
    font-black
    tracking-tight
    whitespace-nowrap
    
  "
>
  Agape 
</span>
</button>
          {/* DESKTOP NAV */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-6
xl:gap-7
            "
          >
            {navLinks.map((link, index) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`
                  relative
                  text-[17px]
                  font-semibold
                  transition-colors
                  duration-300
                  ${
                    index === 0
                      ? "text-[#0F9A94]"
                      : "text-slate-800 hover:text-[#0F9A94]"
                  }
                `}
              >
                {link}

                {index === 0 && (
                  <span
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-[34px]

                      h-[2px]
                      w-6

                      rounded-full

                      bg-[#0F9A94]
                    "
                  />
                )}
              </button>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="
                hidden
                sm:flex

                items-center
                gap-2

                px-5
                py-2.5

                rounded-2xl

                bg-[#0F9A94]

                text-white
                font-semibold

                shadow-lg
                shadow-teal-500/20

                hover:bg-[#0D8B86]
                hover:-translate-y-0.5

                transition-all
                duration-300
              "
            >
              <Send size={16} />
              Hire Me
            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                lg:hidden

                w-11
                h-11

                rounded-xl

                border
                border-slate-200

                bg-white

                flex
                items-center
                justify-center

                text-slate-800
              "
            >
              {mobileOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="
              lg:hidden

              mt-3

              max-w-6xl
              mx-auto

              px-4
              sm:px-6
              md:px-8
            "
          >
            <div
              className="
                rounded-[28px]

                border
                border-white/70

                bg-white/90
                backdrop-blur-2xl

                shadow-[0_20px_60px_rgba(15,23,42,0.10)]

                p-4
              "
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollTo(link)}
                    className="
                      text-left

                      px-4
                      py-3

                      rounded-2xl

                      text-slate-700
                      font-medium

                      hover:bg-slate-100

                      transition-all
                    "
                  >
                    {link}
                  </button>
                ))}

                <button
                  onClick={() => scrollTo("contact")}
                  className="
                    mt-3

                    px-5
                    py-4

                    rounded-2xl

                    bg-[#0F9A94]

                    text-white
                    font-semibold
                  "
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}