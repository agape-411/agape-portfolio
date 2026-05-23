"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "Scalable frontend systems built with maintainable structure, reusable components, and production-grade standards.",
  },
  {
    icon: Palette,
    title: "Premium UI Design",
    desc: "Modern interfaces with strong visual hierarchy, smooth interactions, and polished user experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        bg-[#F1F5F9]

        py-12
        md:py-16
        lg:py-20
      "
    >
      {/* HERO → ABOUT TRANSITION */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0

          h-28

          bg-gradient-to-b
          from-transparent
          via-[#EEF7F7]
          to-[#F1F5F9]

          pointer-events-none
        "
      />

      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* TOP LEFT GLOW */}
        <div
          className="
            absolute
            -top-24
            -left-24

            w-[500px]
            h-[500px]

            rounded-full

            bg-cyan-100/70

            blur-[180px]
          "
        />

        {/* BOTTOM RIGHT GLOW */}
        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]

            w-[600px]
            h-[600px]

            rounded-full

            bg-emerald-100/60

            blur-[200px]
          "
        />

        {/* CENTER SOFT GLOW */}
        <div
          className="
            absolute

            top-1/2
            left-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[700px]
            h-[700px]

            rounded-full

            bg-white/40

            blur-[220px]
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-center
            max-w-4xl
            mx-auto
            mb-12
            lg:mb-16
          "
        >
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center

              px-5
              py-2

              rounded-full

              border
              border-[#A7F3E8]

              bg-white/80
              backdrop-blur-xl

              shadow-sm

              mb-5
            "
          >
            <span
              className="
                text-sm
                font-semibold
                tracking-[0.2em]
                text-[#0F766E]
              "
            >
              ABOUT ME
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-[3.75rem]

              font-black
              leading-[0.95]
              tracking-tight

              text-slate-900
            "
          >
            Passionate About

            <span className="block text-[#14B8A6] mt-2">
              Building Modern
            </span>

            Web Experiences
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div
          className="
            grid
            lg:grid-cols-2

            gap-8
            lg:gap-12

            items-start
          "
        >
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              text-center
              lg:text-left

              flex
              flex-col
              justify-center

              h-full
            "
          >
            <p
              className="
              max-w-[580px]
              mx-auto
              lg:mx-0

              text-lg
              leading-relaxed
              text-slate-700
"
            >
              I specialize in crafting premium digital experiences with
              modern frontend technologies, intuitive interfaces, and
              scalable architecture designed for performance and long-term
              growth.

              <br />
              <br />

              My focus is building responsive, visually polished, and
              highly optimized web applications that blend clean
              engineering with premium user experience.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-[32px]

                    border
                    border-white/60

                    bg-white/80
                    backdrop-blur-xl

                    p-6 lg:p-7

                    shadow-[0_10px_40px_rgba(15,23,42,0.06)]

                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]

                    transition-all
                    duration-500
                  "
                >
                  {/* CARD GLOW */}
                  <div
                    className="
                      absolute

                      top-0
                      right-0

                      w-40
                      h-40

                      rounded-full

                      bg-cyan-100

                      blur-3xl

                      opacity-0
                      group-hover:opacity-100

                      transition-opacity
                      duration-500
                    "
                  />

                  {/* ICON */}
                  <div
                    className="
                      relative
                      z-10

                      w-16
                      h-16

                      rounded-2xl

                      bg-gradient-to-br
                      from-[#14B8A6]
                      to-[#0F766E]

                      flex
                      items-center
                      justify-center

                      shadow-lg

                      mx-auto
                    "
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      relative
                      z-10

                      mt-5

                      text-center
                    "
                  >
                    <h3
                      className="
                        text-2xl
                        font-bold

                        text-slate-900

                        mb-3
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-slate-600

                        leading-relaxed
                        text-base
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}