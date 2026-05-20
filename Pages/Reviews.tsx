"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Quote,
  ExternalLink,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Patricia R.",
    role: "London, GB",
    platform: "Fivver",
    text: "Agape did an excellent job completing tasks on time and efficiently resolving issues on my website. He retrieved key data and offered clear, valuable insights that helped improve both the functionality and security of my website. A knowledgeable and reliable contributor. Great to work with and will definitely work with him again.",
    rating: 5,
    image: "/images/fv.png",
    logo: "/images/fv.png",
  },
  {
    name: "Terry Lee",
    role: "Washington, D.C., US",
    platform: "PeoplePerHour",
    text: "Great implementation and attention to detail. Looking forward to continue working with Agape.",
    rating: 5,
    image: "/images/Terry.jpg",
    logo: "/images/pp.png",
  },
  {
    name: "Oli Sandri",
    role: "Stratford-upon-Avon, GB",
    platform: "Fivver",
    text: "Agape was super efficient and very responsive. He carried out the work we needed on our website design and function very quickly and tested thoroughly. The first attempt needed tweaking and Agape had no problem adjusting to improve its function. Great Job Thank you. I highly recommend for web development.",
    rating: 5,
    image: "/images/fv.png",
    logo: "/images/fv.png",
  },
  {
    name: "Terry Lee",
    role: "Washington, D.C., US",
    platform: "PeoplePerHour",
    text: "I have used Agape consistently for the past 2 months for the redesign of my website and new business launch. He has been A+ on all fronts.",
    rating: 5,
    image: "/images/Terry.jpg",
    logo: "/images/pp.png",
  },
  {
    name: "Terry Lee",
    role: "Washington, D.C., US",
    platform: "PeoplePerHour",
    text: "I've had the pleasure of working with Agape on two separate projects, and I couldn't be more impressed with the experience both times. His responsiveness has been exceptional - he consistently replies to messages promptly and keeps me updated throughout each phase of the project, which makes the entire process smooth and stress-free. What really sets him apart is his incredible attention to detail. He catches things I never would have noticed and ensures every element is polished and purposeful.",
    rating: 5,
    image: "/images/Terry.jpg",
    logo: "/images/pp.png",
  },
  {
    name: "Terry Lee",
    role: "Washington, D.C., US",
    platform: "PeoplePerHour",
    text: "Agape did another great job for me. He is very professional and responsive.",
    rating: 5,
    image: "/images/Terry.jpg",
    logo: "/images/pp.png",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="
        relative
        overflow-hidden
        py-10
        sm:py-14
        lg:py-14
        bg-[linear-gradient(135deg,#0A7B80_0%,#16A6A3_45%,#9EFFF2_100%)]
      "
    >
      {/* BACKGROUND LIGHTING */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-200/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-9"
        >

          <div
            className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              border border-white/20
              bg-white/10
              backdrop-blur-xl
              mb-3
            "
          >
            <span className="text-xs sm:text-sm tracking-[0.2em] text-white/90">
              TESTIMONIALS
            </span>
          </div>

          <h2
            className="
              text-[2.4rem]
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              text-[#052B2F]
            "
          >
            What Clients Say
          </h2>

          <p
            className="
              mt-4
              text-base
              sm:text-lg
              lg:text-xl
              text-[#114B50]
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Trusted by startups, businesses, and teams building
            modern digital experiences across multiple freelance platforms.
          </p>

        </motion.div>

        {/* TRUST METRICS */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            mb-8
          "
        >
          {[
            {
              value: "100%",
              label: "Client Satisfaction",
            },
            {
              value: "20+",
              label: "Projects Delivered",
            },
            {
              value: "5★",
              label: "Average Rating",
            },
            {
              value: "3+",
              label: "Platforms Active",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border border-white/15
                bg-white/10
                backdrop-blur-2xl
                px-5
                py-4
                text-center
              "
            >
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-white/75">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="pb-16!"
        >

          {reviews.map((review, i) => (
            <SwiperSlide key={i} className="h-auto">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  h-full
                  min-h-[500px]
                  rounded-[30px]
                  border border-white/15
                  bg-white/12
                  backdrop-blur-2xl
                  p-5 sm:p-6
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  hover:-translate-y-1
                  transition-all duration-500
                  flex flex-col
                  overflow-hidden
                "
              >
                {/* CARD GLOW */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* TOP ROW */}
                <div className="flex items-start justify-between gap-4 mb-8 relative z-10">

                  {/* LEFT */}
                  <div className="flex flex-col gap-4">

                    {/* STARS */}
                    <div className="flex gap-1">
                      {Array.from({
                        length: review.rating,
                      }).map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 text-yellow-300 fill-yellow-300"
                        />
                      ))}
                    </div>

                    {/* PLATFORM BADGE */}
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-xl
                        bg-white/10
                        border border-white/10
                        w-fit
                      "
                    >
                      <div className="relative w-4 h-4 shrink-0">
                        <Image
  src={review.logo}
  alt={review.platform}
  width={28}
  height={28}
  className="object-contain shrink-0"
/>
                      </div>

                      <span className="text-xs text-white/85 font-medium">
                        {review.platform}
                      </span>
                    </div>

                  </div>

                  {/* QUOTE ICON */}
                  <div
                    className="
                      shrink-0
                      w-14
                      h-14
                      rounded-2xl
                      bg-white/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Quote className="w-7 h-7 text-white/80" />
                  </div>

                </div>

                {/* REVIEW TEXT */}
                <div className="relative mb-6">

                  <p
                    className="
                      text-base
                      sm:text-[17px]
                      leading-8
                      text-[#052B2F]
                      line-clamp-6
                    "
                  >
                    “{review.text}”
                  </p>

                  {/* FADE */}
                  <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#6fe4d6]/40 to-transparent pointer-events-none" />

                </div>

                {/* READ MORE */}
                <button
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#05363B]
                    hover:text-white
                    transition-colors
                    mb-5
                  "
                >
                  Read Full Review
                  <ExternalLink className="w-4 h-4" />
                </button>

                {/* FOOTER */}
                <div className="mt-auto">

                  <div className="flex items-center gap-4">

                    <Image
  src={review.image}
  alt={review.name}
  width={56}
  height={56}
  className="
    w-14
    h-14
    rounded-full
    border-2
    border-white/20
    object-cover
    shrink-0
  "
/>

                    <div>

                      <h4 className="text-lg font-bold text-[#052B2F]">
                        {review.name}
                      </h4>

                      <p className="text-[#355659] text-sm sm:text-base">
                        {review.role}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* PLATFORM STRIP */}
        <div
          className="
            mt-4
            flex
            flex-wrap
            items-center
            justify-center
            gap-5
            opacity-80
          "
        >
          {[
            {
              name: "Upwork",
              logo: "/images/upw.png",
            },
            {
              name: "PeoplePerHour",
              logo: "/images/pp.png",
            },
            {
              name: "Fiverr",
              logo: "/images/fv.png",
            },
          ].map((platform) => (
            <div
              key={platform.name}
              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-2xl
                border border-white/15
                bg-white/10
                backdrop-blur-xl
              "
            >
              <div className="relative w-5 h-5">
                <Image
  src={platform.logo}
  alt={platform.name}
  width={34}
  height={34}
  className="object-contain shrink-0"
/>
              </div>

              <span className="text-sm font-medium text-white">
                {platform.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}