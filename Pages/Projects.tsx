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
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0A7B80_0%,#16A6A3_45%,#9EFFF2_100%)] py-12 md:py-16"
    >
      {/* BACKGROUND LIGHTING */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-200/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-87.5 h-87.5 bg-white/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl mb-2">
            <span className="text-xs sm:text-sm tracking-[0.2em] text-white/90">
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#052B2F]">
            Featured Projects
          </h2>

          <p className="mt-3 text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
             A collection of real-world digital experiences focused on
            modern UI, responsiveness, scalability, and premium frontend
            engineering.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid lg:grid-cols-2 gap-4 xl:gap-5">
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
                rounded-4xl
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
    h-60
    sm:h-70
    md:h-80
    lg:h-85
    xl:h-95
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
  <div className="absolute inset-0 bg-linear-to-t from-[#052B2F]/40 via-transparent to-transparent pointer-events-none" />
</div>
              {/* CONTENT */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.8rem] font-semibold tracking-tight text-[#052B2F] leading-tight">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      shrink-0
                      w-9 h-9
                      rounded-2xl
                      bg-[#052B2F]
                      text-white
                      flex items-center justify-center
                      hover:scale-105
                      transition-all duration-300
                    "
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[#052B2F] mb-3">
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