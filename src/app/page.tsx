'use client'

import Image from "next/image";
import { ReactLenis, useLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { motion, useScroll, useTransform, Variant, Variants } from "framer-motion"
import { useRef } from "react";

export default function Home() {

  const img_grid = useRef(null)
  const { scrollYProgress } = useScroll({
    target: img_grid,
    offset: ['start center', 'center start']
  })

  // safe client check for mobile size (used directly, no hook-order issues)
  const ismobile = typeof window !== "undefined" && window.innerWidth < 760

  // ALWAYS call the hooks (no conditional calls)
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -20])
  const img1_x_t = useTransform(scrollYProgress, [0, 1], [-5, 0])
  const img2_x_t = useTransform(scrollYProgress, [0, 1], [5, 0])
  const img3_x_t = useTransform(scrollYProgress, [0, 1], [-30, 0])
  const img3_y_t = useTransform(scrollYProgress, [0, 1], [10, 0])
  const img4_y_t = useTransform(scrollYProgress, [0, 1], [50, 0])

  // choose the value used in style based on ismobile
  const y = ismobile ? 0 : yTransform
  const img1_x = ismobile ? 0 : img1_x_t
  const img2_x = ismobile ? 0 : img2_x_t
  const img3_x = ismobile ? 0 : img3_x_t
  const img3_y = ismobile ? 0 : img3_y_t
  const img4_y = ismobile ? 0 : img4_y_t

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  // Variants used across sections
  const sectionContainerVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.12 } }
  }

  const itemFadeUp:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 16, stiffness: 120 } }
  }

  return (
    <div className="font-sans text-xl min-h-screen flex flex-col gap-16 items-center bg-[#FAFAFA] px-6 sm:px-10 md:px-16">
      <ReactLenis root />

      {/* navbar */}
      <motion.nav
        className="w-full py-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <a className="font-normal text-black/90 text-xl sm:text-2xl">logo</a>
        <motion.button
          className="border-1 relative group inline-flex border-black/60 py-4 sm:py-4 px-9 sm:px-9 rounded-full text-[15px] sm:text-[15px] text-black/90 font-normal cursor-pointer"
          whileTap={{ scale: 0.98 }}
        >
          <span className="group-hover:-translate-x-3 transition-all">contact us</span>
          <img
            src={"/downarrow.svg"}
            className="absolute -rotate-90 right-4 sm:right-6 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all w-3 sm:w-4 self-center"
          />
        </motion.button>
      </motion.nav>

      {/* section one */}
      <section className="flex flex-col items-center text-black/90 w-full max-w-[950px] gap-8 sm:gap-12">
        {/* headline and button */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', damping: 13 }}
          className="flex flex-col md:flex-row justify-around items-start px-4 sm:px-0 lg:items-center gap-6 w-full"
        >
          <div>
            <h1 className="text-3xl sm:text-[40px] font-medium text-black/90 w-fit">
              Fredza Agency
            </h1>
            <p className="text-lg sm:text-[25px] font-sans text-black/80 w-fit">
              Professional branding and marketing.
            </p>
          </div>

          <motion.button
            className="border-1 group h-fit w-fit relative border-black/90 py-4 sm:py-4 px-9 sm:px-9 rounded-full text-[15px] md:py-5 md:px-12 md:text-[20px] text-black/90 font-normal cursor-pointer inline-flex"
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", damping: 14 }}
          >
            <span className="group-hover:-translate-x-4 transition-all">book a call</span>
            <img
              src={"/downarrow.svg"}
              className="inline-block w-5 sm:w-6 self-center absolute right-4 sm:right-6 translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 -rotate-90"
            />
          </motion.button>
        </motion.div>

        {/* image grid */}
        <motion.div
          ref={img_grid}
          style={{ y: y }}
          className="grid grid-cols-2 md:grid-cols-5 grid-rows-2 md:grid-rows-2 w-full h-full p-4 sm:p-8 md:p-16 sm:pt-4 md:pt-4 pt-4 gap-3"
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainerVariants}
        >
          <motion.div style={{ x: img1_x }} variants={itemFadeUp} className="col-span-2 md:col-span-3">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl" />
          </motion.div>

          <motion.div style={{ x: img2_x }} variants={itemFadeUp} className="col-span-1 md:col-span-2">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl aspect-square" />
          </motion.div>

          <motion.div style={{ x: img3_x, y: img3_y }} variants={itemFadeUp} className="col-span-2 md:col-span-3 hidden md:flex font-normal text-[35px] md:text-[40px]s text-black/95 items-center">
            <p>We help brands and businesses achieve online presence</p>
          </motion.div>

          <motion.div style={{ y: img4_y }} variants={itemFadeUp} className="col-span-1 md:col-span-2">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl aspect-square" />
          </motion.div>
        </motion.div>
      </section>

      {/* section 2 */}
      <section className="flex flex-col sm:flex-row gap-3 w-full px-0 sm:px-4 lg:px-16 justify-center max-w-[950px]">
        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full"
          initial={ "hidden"}
          whileInView={ "visible"}
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          {[
            { number: "300+", label: "Clients" },
            { number: "4.1", label: "rating" },
            { number: "5+", label: "YOE" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-2 border-[1px] border-black/70 py-8 sm:py-12 flex-1 items-center justify-center rounded-xl"
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 16 } },
              }}
            >
              <h1 className="text-2xl sm:text-[30px] text-black/90 text-center font-medium">
                {stat.number}
              </h1>
              <h1 className="text-base sm:text-[19px] text-black/90 text-center mt-1 sm:mt-2">
                {stat.label}
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* section 3 */}
      <motion.section
        className="w-full mt-16 max-w-[950px] px-4 sm:px-0"
        initial={"hidden"}
        whileInView={ "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainerVariants}
      >
        <motion.h1 variants={itemFadeUp} className="text-3xl sm:text-[40px] font-medium text-black/90 mb-6 sm:mb-8 w-fit">
          Our services
        </motion.h1>
        <motion.div variants={itemFadeUp} className="w-full py-2 px-2 rounded-2xl border-[1.5px] border-black/70 flex flex-wrap gap-2 sm:gap-2">
          {["Branding", "Marketing", "Design", "Strategy"].map((srv, i) => (
            <motion.div
              key={i}
              className="bg-[#303030] py-10 sm:py-16 px-6 sm:px-12 rounded-[8px] flex flex-1 justify-center min-w-[140px]"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 16 } } }}
            >
              <span className="text-lg sm:text-[25px] font-normal text-white">
                {srv}
              </span>
            </motion.div>
          ))}
          <img src={"/downarrow.svg"} className="w-8 hidden md:block mr-2 -rotate-90 self-center" />
        </motion.div>
      </motion.section>

      {/* section 4 */}
      <motion.section
        className="w-full mt-16 max-w-[950px] px-4 sm:px-0"
        initial={{ opacity: 0, y: 16 }}
        whileInView={ { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-col flex justify-center gap-4 sm:flex-row">
          <div className="flex-[0.75]">
            <h1 className="text-3xl sm:text-[40px] font-medium text-black/90 mb-2 w-fit">
              About us
            </h1>
            <p className="text-lg tracking-wide sm:text-[25px] text-black/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex-1 object-cover max-w-[390px]">
            <img src={"/image 1.png"} />
          </div>
        </div>
      </motion.section>

      {/* section 5 */}
      <motion.section
        className="w-full mt-8 max-w-[950px] mb-16 px-4 sm:px-0"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainerVariants}
      >
        <motion.h1 variants={itemFadeUp} className="text-3xl sm:text-[40px] font-medium text-black/90 w-fit mb-6 sm:mb-12">
          Recent Projects
        </motion.h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 max-w-[700px] mx-auto">

          <motion.div variants={itemFadeUp} className=" relative col-span-2 sm:col-span-2">
            <img src={"/image 1.png"} className="object-cover w-full h-full rounded-xl" />
            <h1 className="absolute text-white text-4xl font-semibold top-5 left-5 z-10">cool project</h1>
          </motion.div>
          <motion.div variants={itemFadeUp} className="relative">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl" />
            {/* <h1 className="absolute text-white text-4xl font-semibold bottom-5 left-3 z-10">cool project</h1> */}
          </motion.div>
          <motion.div variants={itemFadeUp} className="relative">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl" />
            {/* <h1 className="absolute text-white text-4xl font-semibold bottom-5 left-3 z-10">cool project</h1> */}
          </motion.div>
          <motion.div variants={itemFadeUp} className="col-span-2 sm:col-span-2 relative">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl" />
            <h1 className="absolute text-white text-4xl font-semibold top-5 right-5 z-10">cool project</h1>
          </motion.div>
        </div>
      </motion.section>

      {/* section 6 */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="mb-48 px-4 sm:px-0"
      >
        <h1 className="text-3xl sm:text-[40px] font-medium text-black/90 mb-6 sm:mb-8 text-center">
          Level up your brand right now
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="border-1 relative group inline-flex border-black/60 py-3 mx-auto sm:mx-0 sm:py-4 px-7 sm:px-9 rounded-full text-base sm:text-[20px] text-black/90 font-normal cursor-pointer"

            transition={{ type: "spring", damping: 14 }}
          >
            <span className="group-hover:-translate-x-3 transition-all">contact us</span>
            <img
              src={"/downarrow.svg"}
              className="absolute -rotate-90 right-5 sm:right-6 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all w-3 sm:w-4 self-center"
            />
          </motion.button>
          <motion.button
            className="border-1 transition-all relative group inline-flex bg-black/85 py-3 mx-auto sm:mx-0 sm:py-4 px-7 sm:px-9 rounded-md text-base sm:text-[20px] hover:rounded-sm font-normal cursor-pointer"
            transition={{ type: "spring", damping: 14 }}
          >
            <span className="transition-all text-white">
              contact us
            </span>
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
}
