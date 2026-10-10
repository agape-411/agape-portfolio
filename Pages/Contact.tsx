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

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (sending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to send your message. Please try again."
        );
      }

      form.reset();

      setStatus({
        type: "success",
        message:
          "Message sent successfully. I’ll get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0A7B80_0%,#16A6A3_45%,#9EFFF2_100%)] py-8 sm:py-8 lg:py-10"
    >
      {/* SECTION TITLE */}
      <div className="relative z-10 px-4 sm:px-6">
        <h2 className="mb-3 text-center text-3xl font-bold leading-none tracking-tight text-white sm:mb-5 sm:text-4xl lg:text-[3.5rem]">
          Connect
        </h2>
      </div>

      {/* BACKGROUND LIGHTING */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-112.5 w-75 rounded-full bg-cyan-200/20 blur-[120px] sm:h-112.5 sm:w-112.5 sm:blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-white/10 blur-[100px] sm:h-87.5 sm:w-87.5 sm:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        <div
          className="
            overflow-hidden
            rounded-[28px] sm:rounded-[40px]
            border border-white/20
            bg-white/10
            backdrop-blur-2xl
            shadow-[0_25px_80px_rgba(0,0,0,0.12)]
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT PANEL */}
            <div className="relative p-5 lg:p-6">
              {/* INNER GLOW */}
              <div className="absolute left-0 top-0 h-45 w-45 rounded-full bg-white/10 blur-[80px] sm:h-62.5 sm:w-62.5 sm:blur-[100px]" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative z-10 text-center lg:text-left"
              >
                {/* HEADING */}
                <h2 className="text-2xl font-semibold leading-[0.95] tracking-tight text-[#052B2F] sm:text-3xl lg:text-[3rem]">
                  Let’s Build
                  <span className="mt-2 block text-white">
                    Something Great
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-black sm:mt-4 sm:text-lg md:text-xl lg:mx-0">
                  Have a project in mind or looking for a
                  developer to bring your ideas to life? Let’s
                  connect and create modern digital experiences
                  together.
                </p>

                {/* CONTACT INFO */}
                <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                  {contactInfo.map(
                    ({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="
                          flex items-center gap-2
                          rounded-2xl border border-white/15
                          bg-white/10 p-2 text-left
                          backdrop-blur-xl sm:gap-3 sm:p-3
                        "
                      >
                        <div
                          className="
                            flex h-12 w-12 shrink-0
                            items-center justify-center
                            rounded-2xl bg-[#052B2F]
                            shadow-lg sm:h-11 sm:w-11
                          "
                        >
                          <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs text-white/70 sm:text-sm">
                            {label}
                          </p>

                          <h4 className="break-words text-sm font-semibold text-[#052B2F] sm:text-lg">
                            {value}
                          </h4>
                        </div>
                      </div>
                    )
                  )}
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
                border-white/10 bg-white/15
                p-3 backdrop-blur-2xl
                sm:p-8 lg:border-l lg:p-8
              "
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
              >
                {/* NAME + EMAIL */}
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1 block text-sm font-medium text-[#052B2F] sm:mb-2"
                    >
                      Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      maxLength={100}
                      placeholder="Your name"
                      required
                      className="
                        w-full rounded-2xl border
                        border-white/20 bg-white/20
                        px-4 py-2.5 text-sm text-[#052B2F]
                        backdrop-blur-xl transition
                        placeholder:text-[#355659]
                        focus:border-white/40 focus:outline-none
                        sm:px-5 sm:py-3 sm:text-base
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1 block text-sm font-medium text-[#052B2F] sm:mb-2"
                    >
                      Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      maxLength={254}
                      placeholder="Your email"
                      required
                      className="
                        w-full rounded-2xl border
                        border-white/20 bg-white/20
                        px-4 py-2.5 text-sm text-[#052B2F]
                        backdrop-blur-xl transition
                        placeholder:text-[#355659]
                        focus:border-white/40 focus:outline-none
                        sm:px-5 sm:py-3 sm:text-base
                      "
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-1 block text-sm font-medium text-[#052B2F] sm:mb-2"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    maxLength={150}
                    placeholder="Project subject"
                    required
                    className="
                      w-full rounded-2xl border
                      border-white/20 bg-white/20
                      px-4 py-2.5 text-sm text-[#052B2F]
                      backdrop-blur-xl transition
                      placeholder:text-[#355659]
                      focus:border-white/40 focus:outline-none
                      sm:px-5 sm:py-3 sm:text-base
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1 block text-sm font-medium text-[#052B2F] sm:mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    rows={5}
                    name="message"
                    maxLength={5000}
                    placeholder="Tell me about your project..."
                    required
                    className="
                      w-full resize-none rounded-2xl border
                      border-white/20 bg-white/20
                      px-4 py-2.5 text-sm text-[#052B2F]
                      backdrop-blur-xl transition
                      placeholder:text-[#355659]
                      focus:border-white/40 focus:outline-none
                      sm:px-5 sm:py-3 sm:text-base
                    "
                  />
                </div>

                {/* SUCCESS / ERROR MESSAGE */}
                {status && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "bg-emerald-100 text-emerald-900"
                        : "bg-red-100 text-red-900"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={sending}
                  className="
                    group flex w-full items-center
                    justify-center gap-3 rounded-2xl
                    bg-[#052B2F] px-5 py-3
                    text-base font-semibold text-white
                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                    transition-all duration-300
                    hover:bg-[#041F22]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:px-6 sm:py-4 sm:text-lg
                  "
                >
                  {sending ? "Sending Message..." : "Send Message"}

                  <div
                    className="
                      flex h-8 w-8 items-center
                      justify-center rounded-full bg-white/10
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    {sending ? (
                      <Send className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
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