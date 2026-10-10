"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative isolate flex min-h-[100svh] flex-col
        justify-center overflow-hidden
        bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#f8fafc_45%,#eef7f7_100%)]
        pt-20 sm:pt-24
      "
    >
      {/* PREMIUM ATMOSPHERIC BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* LEFT WHITE GLOW */}
        <div
          className="
            absolute -top-40 left-1/4
            h-[38rem] w-[38rem] rounded-full
            bg-white/90 blur-[200px]
          "
        />

        {/* MASSIVE RIGHT TEAL GLOW */}
        <div
          className="
            absolute top-[42%] -right-[18rem]
            h-[70rem] w-[70rem] -translate-y-1/2
            rounded-full bg-[#14B8A6]/45 blur-[260px]
          "
        />

        {/* SECOND TEAL LAYER */}
        <div
          className="
            absolute top-[38%] right-5
            h-[44rem] w-[44rem] rounded-full
            bg-cyan-300/40 blur-[180px]
          "
        />

        {/* EMERALD CORE */}
        <div
          className="
            absolute top-[48%] right-[7.5rem]
            h-[26rem] w-[26rem] rounded-full
            bg-emerald-300/35 blur-[120px]
          "
        />

        {/* BOTTOM ATMOSPHERE */}
        <div
          className="
            absolute -bottom-[15.625rem] left-1/3
            h-[18.75rem] w-[18.75rem] rounded-full
            bg-emerald-200/25 blur-[220px]
          "
        />
      </div>

      {/* SOFT LIGHT OVERLAY */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_70%)]
          opacity-60
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-7xl
          px-4 pb-16 pt-8
          sm:px-6 sm:pb-16 sm:pt-6
          md:pb-12 md:pt-4
          lg:px-10 lg:pb-10 lg:pt-2
          xl:py-8
          2xl:py-12
        "
      >
        <div
          className="
            grid grid-cols-1 items-center
            gap-8 sm:gap-9 md:gap-8
            xl:grid-cols-2 xl:gap-8
            2xl:gap-11
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              order-2 min-w-0
              text-center
              xl:order-1 xl:text-left
            "
          >
            {/* BADGE */}
            <div
              className="
                mb-4 inline-flex items-center gap-2
                rounded-full border border-slate-200
                bg-white/70 px-4 py-2
                shadow-sm backdrop-blur-xl
              "
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

              <span
                className="
                  text-xs font-semibold tracking-[0.12em]
                  text-[#0F766E]
                  sm:text-sm sm:tracking-[0.2em]
                "
              >
                AVAILABLE FOR FREELANCE
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                text-4xl font-bold leading-[0.92]
                tracking-[-0.04em] text-[#0F172A]
                sm:text-5xl
                md:text-6xl
                lg:text-[4rem]
                xl:text-[4.8rem]
              "
            >
              Building
              <span className="block text-[#0F172A]">
                Modern
              </span>
              <span className="block text-[#14B8A6]">
                Experiences
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mx-auto mt-4 max-w-2xl
                text-base leading-relaxed text-black
                sm:text-lg md:text-xl
                xl:mx-0
              "
            >
              Frontend developer crafting premium modern websites
              with high performance architecture, clean UI systems,
              smooth animations, and scalable user experiences
              for brands, startups, and businesses.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-5 flex flex-col justify-center gap-3
                sm:mt-6 sm:flex-row sm:gap-4
                xl:mt-6 xl:justify-start
              "
            >
              <button
                onClick={() => scrollTo("contact")}
                className="
                  w-full rounded-2xl bg-[#0F766E]
                  px-8 py-4 font-semibold text-white
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-[#115E59]
                  hover:shadow-[0_15px_40px_rgba(15,118,110,0.25)]
                  active:scale-[0.98]
                  sm:w-auto
                "
              >
                Get In Touch
              </button>

              <button
                onClick={() => scrollTo("projects")}
                className="
                  w-full rounded-2xl border border-slate-200
                  bg-white/70 px-8 py-4
                  font-semibold text-slate-800
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-white
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  active:scale-[0.98]
                  sm:w-auto
                "
              >
                View Projects
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="
              order-1 relative mt-0
              flex w-full min-w-0
              items-center justify-center
              xl:order-2 xl:mt-0
            "
          >
            {/* IMAGE WRAPPER */}
            <div
              className="
                relative h-64 w-full max-w-[420px]
                sm:h-80
                md:h-[340px]
                lg:h-[360px]
                xl:h-[400px]
                2xl:h-[460px]
              "
            >
              {/* TEAL ATMOSPHERIC GLOW */}
              <div
                className="
                  absolute inset-0 scale-[1.2]
                  bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.55),transparent_70%)]
                  blur-[80px]
                "
              />

              <div
                className="
                  absolute top-1/2 -right-5
                  h-80 w-[320px] -translate-y-1/2
                  rounded-full bg-[#14B8A6]/30 blur-[80px]
                "
              />

              {/* GLASS BACK PANEL */}
              <div
                className="
                  absolute inset-0 rotate-2
                  rounded-[36px] border border-white/40
                  bg-white/20 backdrop-blur-xl
                "
              />

              {/* MAIN IMAGE CARD */}
              <div
                className="
                  absolute inset-0 overflow-hidden
                  rounded-[36px] border border-white/80
                  bg-white/40 shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                  backdrop-blur-xl
                "
              >
                <Image
                  src="/images/prof.png"
                  alt="Agape — Web Developer"
                  fill
                  priority
                  sizes="
                    (max-width: 639px) calc(100vw - 32px),
                    (max-width: 1279px) 420px,
                    (max-width: 1535px) 400px,
                    460px
                  "
                  className="object-cover object-center"
                />

                {/* IMAGE OVERLAY */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-t
                    from-[#0F766E]/10 via-transparent to-transparent
                  "
                />

                {/* DOTS */}
                <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#0F9A94]"
                    />
                  ))}
                </div>
              </div>

              {/* FLOATING CARD */}
              <div
                className="
                  absolute bottom-3 left-2 z-20
                  w-fit rounded-2xl
                  border border-white/60
                  bg-white/80 px-4 py-3
                  shadow-xl backdrop-blur-xl
                  sm:left-3 lg:left-3
                "
              >
                <p className="whitespace-nowrap text-xs font-medium text-slate-800 sm:text-sm">
                  Web Developer
                </p>

                <h4 className="whitespace-nowrap text-base font-bold text-slate-900 sm:text-lg">
                  React • Next.js
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="
          absolute bottom-3 left-1/2 z-20 hidden
          -translate-x-1/2
          lg:bottom-4 lg:block
        "
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full border border-slate-200
            bg-white/80 shadow-md backdrop-blur-xl
          "
        >
          <ArrowDown className="h-5 w-5 text-slate-700" />
        </motion.div>
      </div>
    </section>
  );
}
