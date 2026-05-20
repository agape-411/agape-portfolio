"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#f8fafc_45%,#eef7f7_100%)]
      "
    >
      {/* PREMIUM ATMOSPHERIC BACKGROUND */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* LEFT WHITE GLOW */}
  <div
    className="
      absolute
      -top-40
      left-1/4

      w-[600px]
      h-[600px]

      rounded-full

      bg-white/90
      blur-[200px]
    "
  />

  {/* MASSIVE RIGHT TEAL GLOW */}
  <div
    className="
      absolute

      top-[42%]
      right-[-220px]

      -translate-y-1/2

      w-[1200px]
      h-[1200px]

      rounded-full

      bg-[#14B8A6]/45

      blur-[260px]
    "
  />

  {/* SECOND TEAL LAYER */}
  <div
    className="
      absolute

      top-[38%]
      right-[20px]

      w-[700px]
      h-[700px]

      rounded-full

      bg-cyan-300/40

      blur-[180px]
    "
  />

  {/* EMERALD CORE */}
  <div
    className="
      absolute

      top-[48%]
      right-[120px]

      w-[420px]
      h-[420px]

      rounded-full

      bg-emerald-300/35

      blur-[120px]
    "
  />

  {/* BOTTOM ATMOSPHERE */}
  <div
    className="
      absolute

      bottom-[-250px]
      left-1/3

      w-[700px]
      h-[700px]

      rounded-full

      bg-emerald-200/25

      blur-[220px]
    "
  />
</div>

      {/* SOFT LIGHT OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_70%)]

          opacity-60
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-[1400px] mx-auto
          px-6 md:px-10
          pt-[110px]
          md:pt-[100px]
          pb-16
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-14 lg:gap-20
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              order-2 lg:order-1
              text-center lg:text-left
            "
          >
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                px-4
                py-2

                rounded-full

                border
                border-slate-200

                bg-white/70
                backdrop-blur-xl

                shadow-sm

                mb-6
              "
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              <span
                className="
                  text-xs
                  sm:text-sm
                  tracking-[0.25em]
                  font-semibold
                  text-[#0F766E]
                "
              >
                AVAILABLE FOR FREELANCE
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[5rem]
                xl:text-[5.6rem]

                font-black
                leading-[0.92]
                tracking-[-0.04em]

                text-[#0F172A]
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
                mt-7

                max-w-2xl
                mx-auto lg:mx-0

                text-base
                sm:text-lg
                md:text-xl

                leading-relaxed

                text-slate-600
              "
            >
              Frontend developer crafting premium modern websites
              with high-performance architecture, clean UI systems,
              smooth animations, and scalable user experiences
              for brands, startups, and businesses.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-8
                sm:mt-10

                flex
                flex-col
                sm:flex-row

                gap-3
                sm:gap-4

                justify-center
                lg:justify-start
              "
            >
              <button
                onClick={() => scrollTo("contact")}
                className="
                  w-full sm:w-auto

                  px-8
                  py-4

                  rounded-2xl

                  bg-[#0F766E]
                  text-white
                  font-semibold

                  hover:bg-[#115E59]
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(15,118,110,0.25)]

                  active:scale-[0.98]

                  transition-all
                  duration-300
                "
              >
                Get In Touch
              </button>

              <button
                onClick={() => scrollTo("projects")}
                className="
                  w-full sm:w-auto

                  px-8
                  py-4

                  rounded-2xl

                  border
                  border-slate-200

                  bg-white/70
                  backdrop-blur-xl

                  text-slate-800
                  font-semibold

                  hover:bg-white
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                  active:scale-[0.98]

                  transition-all
                  duration-300
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
              order-1 lg:order-2

              relative
              flex
              justify-center
              items-center

              w-full
              mt-2 lg:mt-5
            "
          >
            {/* IMAGE WRAPPER */}
            <div
              className="
                relative

                w-full
                max-w-[560px]

                h-[380px]
                sm:h-[500px]
                lg:h-[620px]
              "
            >
              {/* TEAL ATMOSPHERIC GLOW */}
              <div
  className="
    absolute
    inset-0

    bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.55),transparent_70%)]

    blur-[120px]
    scale-[1.65]
  "
/>

             <div
  className="
    absolute

    top-1/2
    right-[-60px]

    -translate-y-1/2

    w-[520px]
    h-[520px]

    rounded-full

    bg-[#14B8A6]/30

    blur-[120px]
  "
/>
              {/* GLASS BACK PANEL */}
              <div
                className="
                  absolute
                  inset-0

                  rounded-[36px]

                  border
                  border-white/40

                  bg-white/20
                  backdrop-blur-xl

                  rotate-[2deg]
                "
              />

              {/* MAIN IMAGE CARD */}
              <div
                className="
                  absolute
                  inset-0

                  rounded-[36px]
                  overflow-hidden

                  border
                  border-white/80

                  bg-white/40
                  backdrop-blur-xl

                  shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                "
              >
                <Image
                  src="/images/profile.png"
                  alt="Agape"
                  fill
                  priority
                  className="
                    object-cover
                    object-center
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E]/10 via-transparent to-transparent" />

                {/* DOTS */}
                <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-white"
                    />
                  ))}
                </div>
              </div>

              {/* FLOATING CARD */}
              <div
                className="
                  absolute

                  bottom-3
                  left-1/2
                  -translate-x-1/2

                  sm:left-4
                  sm:translate-x-0

                  z-20

                  px-5
                  py-4

                  rounded-2xl

                  border
                  border-white/60

                  bg-white/80
                  backdrop-blur-xl

                  shadow-xl
                "
              >
                <p className="text-sm text-slate-800 font-medium">
                  Web Developer
                </p>

                <h4 className="text-lg font-bold text-slate-900">
                  React • Next.js
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            w-12
            h-12

            rounded-full

            border
            border-slate-200

            bg-white/80
            backdrop-blur-xl

            shadow-md

            flex
            items-center
            justify-center
          "
        >
          <ArrowDown className="w-5 h-5 text-slate-700" />
        </motion.div>
      </div>
    </section>
  );
}