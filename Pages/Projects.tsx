"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Garvey Labs",
    desc: "Modern corporate website engineered with premium UI/UX, responsive layouts, smooth animations, and scalable frontend architecture tailored for a technology-focused brand.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/p1.png",
    link: "https://www.garveylabs.com/",
  },
  {
    title: "Lascenti",
    desc: "High-performance digital platform designed for a modern startup with clean visual hierarchy, responsive user flows, and polished frontend interactions.",
    tags: ["React", "Next.js", "UI/UX", "Responsive Design"],
    image: "/images/p4.png",
    link: "https://www.lascenti.co",
  },
  {
    title: "E-Commerce Platform",
    desc: "Scalable online shopping experience featuring product management, secure checkout workflows, responsive storefront layouts, and optimized performance across devices.",
    tags: ["React", "Stripe", "Node.js", "MongoDB"],
    image: "/images/p2.png",
    link: "#",
  },
  {
    title: "Food Ordering Website",
    desc: "Interactive food delivery platform with dynamic menus, cart functionality, order management workflows, and mobile-optimized customer experience.",
    tags: ["Next.js", "Firebase", "TailwindCSS", "API Integration"],
    image: "/images/p3.png",
    link: "#",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0A7B80_0%,#16A6A3_45%,#9EFFF2_100%)] py-14 md:py-18"
    >
      {/* BACKGROUND LIGHTING */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-200/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-white/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl mb-3">
            <span className="text-xs sm:text-sm tracking-[0.2em] text-white/90">
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#052B2F]">
            Featured Projects
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
             A collection of real-world digital experiences focused on
            modern UI, responsiveness, scalability, and premium frontend
            engineering.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                group
                overflow-hidden
                rounded-[32px]
                bg-white/15
                backdrop-blur-2xl
                border border-white/20
                hover:-translate-y-2
                hover:border-white/30
                transition-all duration-500
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
             {/* IMAGE */}
<div
  className="
    relative
    w-full
    h-[240px]
    sm:h-[280px]
    md:h-[320px]
    lg:h-[340px]
    xl:h-[380px]
    overflow-hidden
    bg-[#071E22]
    flex
    items-center
    justify-center
  "
>
  <Image
    src={project.image}
    alt={project.title}
    fill
    priority
    className="
      object-contain
      object-center
      w-full
      h-full
      p-2
      transition-transform
      duration-700
      group-hover:scale-[1.02]
    "
  />

  {/* IMAGE OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#052B2F]/40 via-transparent to-transparent pointer-events-none" />
</div>
              {/* CONTENT */}
              <div className="p-5 sm:p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-[#052B2F] leading-tight">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      shrink-0
                      w-12 h-12
                      rounded-2xl
                      bg-[#052B2F]
                      text-white
                      flex items-center justify-center
                      hover:scale-105
                      transition-all duration-300
                    "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[#052B2F] mb-6">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-4 py-2
                        rounded-full
                        bg-white/20
                        backdrop-blur-xl
                        border border-white/20
                        text-sm
                        font-medium
                        text-[#052B2F]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}