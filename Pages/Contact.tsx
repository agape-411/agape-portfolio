"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "korrokagape@gmail.com",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Available Mon – Sat",
  },
];

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);

    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0A7B80_0%,#16A6A3_45%,#9EFFF2_100%)] py-10 sm:py-10 lg:py-14"
    >

      {/* SECTION TITLE */}
      <div className="relative z-10 px-4 sm:px-6">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1] tracking-tight text-white text-center mb-6 sm:mb-8">
          Connect
        </h2>

      </div>

      {/* BACKGROUND LIGHTING */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-cyan-200/20 blur-[120px] sm:blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-white/10 blur-[100px] sm:blur-[120px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        <div
          className="
            rounded-[28px] sm:rounded-[40px]
            border border-white/20
            bg-white/10
            backdrop-blur-2xl
            overflow-hidden
            shadow-[0_25px_80px_rgba(0,0,0,0.12)]
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT PANEL */}
            <div className="relative p-8
lg:p-10">

              {/* INNER GLOW */}
              <div className="absolute top-0 left-0 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] bg-white/10 blur-[80px] sm:blur-[100px] rounded-full" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative z-10 text-center lg:text-left"
              >

                {/* HEADING */}
                <h2 className="text-4xl
sm:text-5xl
lg:text-[3.8rem] font-black leading-[0.95] tracking-tight text-[#052B2F]">

                  Let’s Build

                  <span className="block text-white mt-1">
                    Something Great
                  </span>

                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 sm:mt-6 text-[15px] sm:text-lg md:text-xl leading-relaxed text-black max-w-xl mx-auto lg:mx-0">

                  Have a project in mind or looking for a frontend developer
                  to bring your ideas to life? Let’s connect and create
                  modern digital experiences together.

                </p>

                {/* CONTACT INFO */}
                <div className="mt-5 sm:mt-7 space-y-2 sm:space-y-3">

                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="
                        flex items-center gap-2 sm:gap-3
                        rounded-2xl
                        border border-white/15
                        bg-white/10
                        backdrop-blur-xl
                        p-2 sm:p-3
                        text-left
                      "
                    >

                      {/* ICON */}
                      <div
                        className="
                          shrink-0
                          w-12 h-12 sm:w-11 sm:h-11
                          rounded-2xl
                          bg-[#052B2F]
                          flex items-center justify-center
                          shadow-lg
                        "
                      >

                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />

                      </div>

                      {/* TEXT */}
                      <div className="min-w-0">

                        <p className="text-xs sm:text-sm text-white/70">
                          {label}
                        </p>

                        <h4 className="text-sm sm:text-lg font-semibold text-[#052B2F] break-words">
                          {value}
                        </h4>

                      </div>

                    </div>
                  ))}

                </div>

              </motion.div>
            </div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                bg-white/15
                backdrop-blur-2xl
                lg:border-l border-white/10
                p-3 sm:p-10 lg:p-9
              "
            >

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

                {/* NAME + EMAIL */}
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">

                  <div>

                    <label className="block text-sm font-medium text-[#052B2F] mb-1 sm:mb-2">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="
                        w-full
                        px-4 sm:px-5 py-2.5 sm:py-3
                        rounded-2xl
                        border border-white/20
                        bg-white/20
                        backdrop-blur-xl
                        text-[#052B2F]
                        text-sm sm:text-base
                        placeholder:text-[#355659]
                        focus:outline-none
                        focus:border-white/40
                        transition
                      "
                    />

                  </div>

                  <div>

                    <label className="block text-sm font-medium text-[#052B2F] mb-1 sm:mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Your email"
                      required
                      className="
                        w-full
                        px-4 sm:px-5 py-2.5 sm:py-3
                        rounded-2xl
                        border border-white/20
                        bg-white/20
                        backdrop-blur-xl
                        text-[#052B2F]
                        text-sm sm:text-base
                        placeholder:text-[#355659]
                        focus:outline-none
                        focus:border-white/40
                        transition
                      "
                    />

                  </div>

                </div>

                {/* SUBJECT */}
                <div>

                  <label className="block text-sm font-medium text-[#052B2F] mb-1 sm:mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project subject"
                    required
                    className="
                      w-full
                      px-4 sm:px-5 py-2.5 sm:py-3
                      rounded-2xl
                      border border-white/20
                      bg-white/20
                      backdrop-blur-xl
                      text-[#052B2F]
                      text-sm sm:text-base
                      placeholder:text-[#355659]
                      focus:outline-none
                      focus:border-white/40
                      transition
                    "
                  />

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block text-sm font-medium text-[#052B2F] mb-1 sm:mb-2">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="
                      w-full
                      px-4 sm:px-5 py-2.5 sm:py-3
                      rounded-2xl
                      border border-white/20
                      bg-white/20
                      backdrop-blur-xl
                      text-[#052B2F]
                      text-sm sm:text-base
                      placeholder:text-[#355659]
                      resize-none
                      focus:outline-none
                      focus:border-white/40
                      transition
                    "
                  />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={sending}
                  className="
                    group
                    w-full
                    flex items-center justify-center gap-3
                    px-5 sm:px-6 py-3 sm:py-4
                    rounded-2xl
                    bg-[#052B2F]
                    text-white
                    text-base sm:text-lg
                    font-semibold
                    hover:bg-[#041F22]
                    transition-all duration-300
                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  "
                >

                  {sending ? "Sending Message..." : "Send Message"}

                  <div
                    className="
                      w-8 h-8
                      rounded-full
                      bg-white/10
                      flex items-center justify-center
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >

                    {sending ? (
                      <Send className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}

                  </div>

                </button>

              </form>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}