"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend & UI Developer",
    company: "Upwork",
    period: "2021 – Present",
    desc: "Built modern responsive websites and frontend systems for international clients using React, Next.js, Tailwind CSS, and Framer Motion with strong focus on UI quality and performance.",
    logo: "/images/upw.png",
  },

  {
    role: "Freelance Web Developer",
    company: "Fiverr",
    period: "2020 – Present",
    desc: "Delivered custom portfolio websites, landing pages, dashboards, and business platforms with clean architecture, responsive design, and optimized user experiences.",
    logo: "/images/fv.png",
  },

  {
    role: "Frontend Developer",
    company: "PeoplePerHour",
    period: "2022 – Present",
    desc: "Worked with startups and businesses to develop scalable web interfaces, redesign existing platforms, and implement premium modern UI systems across multiple industries.",
    logo: "/images/pp.png",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-11 md:py-15"
    >

      {/* BACKGROUND LIGHTING */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-cyan-100 blur-[120px] rounded-full opacity-70" />

        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-100 blur-[100px] rounded-full opacity-60" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >

          <div className="inline-flex items-center px-5  rounded-full bg-[#DFFFF8] border border-[#A7F3E8] mb-6">
            <span className="text-sm font-medium tracking-[0.2em] text-[#0B7C82]">
              WORK EXPERIENCE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#052B2F]">
          Development Experience          </h2>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#11A3A2] to-transparent" />

          <div className="space-y-4">

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex gap-6"
              >

                {/* ICON */}
                <div className="
                  relative z-10
                  w-10 h-10
                  rounded-full
                  bg-[linear-gradient(135deg,#0A7B80_0%,#16A6A3_100%)]
                  flex items-center justify-center
                  shadow-lg
                  shrink-0
                ">
                  <Briefcase size={18} strokeWidth={2.2} className="text-white" />
                </div>

                {/* CARD */}
                <div className="
                  flex-1
                  rounded-[30px]
                  border border-black/5
                  bg-[#F8FAFA]
                  p-6 lg:p-7
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  transition-all duration-500
                ">

                  {/* TOP */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-3">

                    <div>
                      <h3 className="text-xl lg:text-[1.35rem] font-bold text-[#052B2F]">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-3 mt-2">

                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white border border-black/5">

                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={72}
                            height={72}
                            className="object-contain shrink-0 p-1"
                          />

                        </div>

                        <p className="text-lg text-[#355659]">
                          {exp.company}
                        </p>

                      </div>
                    </div>

                    <div className="
                      self-start
                      px-4 py-1
                      rounded-full
                      bg-[#DFFFF8]
                      border border-[#A7F3E8]
                      text-sm
                      font-medium
                      text-[#0B7C82]
                    ">
                      {exp.period}
                    </div>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-base lg:text-[17px] leading-relaxed text-[#556466]">
                    {exp.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}