"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vue.js",
    ],
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white py-14 md:py-19"
    >

      {/* LIGHTING */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-100 blur-[140px] rounded-full opacity-70" />

        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-100 blur-[120px] rounded-full opacity-60" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >

          <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#DFFFF8] border border-[#A7F3E8] mb-3">
            <span className="text-sm font-medium tracking-[0.2em] text-[#0B7C82]">
              TECH STACK
            </span>
          </div>

          <h2 className="ttext-4xl sm:text-5xl lg:text-[3.8rem] font-black tracking-tight text-[#052B2F]">
            Skills & Technologies
          </h2>

          <p className="mt-2 text-lg md:text-xl text-[#556466] max-w-3xl mx-auto leading-relaxed">
            Modern technologies and tools focused on building scalable,
            high-performance digital products.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-3">

          {skills.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-black/5
                  bg-[#F8FAFA]
                  p-6
                  shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
                  transition-all duration-500
                "
              >

                {/* ICON */}
                <div className="
                  w-16 h-16
                  rounded-2xl
                  bg-[linear-gradient(135deg,#0A7B80_0%,#16A6A3_100%)]
                  flex items-center justify-center
                  shadow-lg
                 mx-auto">
                  <Icon className="w-7 h-7 text-white items-center" />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-2xl font-bold text-[#052B2F] text-center">
                  {cat.title}
                </h3>

                {/* SKILLS */}
                <div className="mt-3 flex flex-wrap gap-6 justify-center">

                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-4 py-2
                        rounded-full
                        bg-white
                        border border-black/5
                        text-sm
                        font-medium
                        text-[#355659]
                        shadow-sm
                        hover:scale-105
                        transition-transform
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}