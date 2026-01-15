import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Komponen Reusable untuk Section Content (SECTION 3 dst)
const FadeInSection = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 bg-zinc-950"
  >
    {children}
  </motion.section>
);

export default function App() {
  const containerRef = useRef(null);
  const [ended15, setEnded15] = useState(false);

  // Efek parallax halus saat scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.main
      ref={containerRef}
      animate={{ backgroundColor: ended15 ? "#000000" : "#ffffff" }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-x-hidden"
    >
      {/* =====================================================
          SECTION 1 : HERO
      ====================================================== */}
      <section className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-white p-10 md:p-20">
        {/* Background Video */}
        <motion.video
          style={{ scale: videoScale }}
          autoPlay
          muted
          playsInline
          onTimeUpdate={(e) => {
            if (!ended15 && e.currentTarget.currentTime >= 15) {
              e.currentTarget.pause();
              setEnded15(true);
            }
          }}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/videos/ink.mp4" type="video/mp4" />
        </motion.video>

        {/* Black overlay after 15s */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ended15 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-black z-10 pointer-events-none"
        />

        {/* Branding */}
        <div className="absolute top-10 left-10 z-20 mix-blend-difference">
          <p className="text-white text-xs tracking-[0.3em] font-medium uppercase">
            Est. 2026 / Visual Studio
          </p>
        </div>

        {/* Main Typography */}
        <motion.div
          style={{ y: textY }}
          className="relative z-20 flex flex-col items-start"
        >
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-[-0.05em] text-white uppercase"
          >
            PROFILE
            <br />
            QUE.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 max-w-sm"
          >
            <p className="text-white text-sm md:text-base leading-relaxed opacity-70 font-light tracking-wide">
              Crafting digital experiences through high-velocity aesthetics and
              cinematic motion design.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10 z-20 mix-blend-difference hidden md:block">
          <div className="flex items-center gap-4 rotate-90 origin-right">
            <span className="text-white text-[10px] tracking-widest uppercase">
              Scroll to explore
            </span>
            <div className="w-12 h-[1px] bg-white/30"></div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 : MANIFESTO (BARU)
      ====================================================== */}
      <motion.section className="relative min-h-screen w-full flex items-center justify-center bg-black px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center"
        >
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-10">
            Manifesto
          </p>

          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
            Motion is not an effect.
            <br />
            <span className="text-zinc-400">
              It is the language of intention.
            </span>
          </h2>
        </motion.div>
      </motion.section>

      {/* =====================================================
          SECTION 3 : PHILOSOPHY (PUNYA KAMU)
      ====================================================== */}
      <FadeInSection>
        <h2 className="text-zinc-500 text-xs tracking-[0.5em] uppercase mb-12">
          The Philosophy
        </h2>

        <p className="max-w-3xl text-white text-3xl md:text-5xl font-medium text-center leading-tight tracking-tight">
          We believe in the power of <span className="italic">motion</span> to
          tell stories that static pixels simply cannot.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-t border-zinc-800 pt-6">
              <span className="text-zinc-600 text-xs">0{i}</span>
              <h3 className="text-white text-xl mt-4 mb-2 font-semibold">
                Vision {i}
              </h3>
              <p className="text-zinc-500 text-sm">
                High-end visual output for modern brands.
              </p>
            </div>
          ))}
        </div>
      </FadeInSection>
      {/* --- SECTION 3 : VALUES --- */}
      <motion.section className="relative w-full bg-black px-6 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">
              What I Believe
            </p>
            <h3 className="text-white text-4xl md:text-5xl font-medium tracking-tight">
              Built on clarity,
              <br />
              driven by purpose.
            </h3>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Design with Meaning",
                desc: "Every motion, color, and layout exists for a reason — not decoration.",
              },
              {
                title: "Performance First",
                desc: "Smooth animation should never sacrifice speed or accessibility.",
              },
              {
                title: "Scalable Thinking",
                desc: "What starts simple must grow clean, structured, and maintainable.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="border-t border-zinc-800 pt-8"
              >
                <h4 className="text-white text-xl font-medium mb-4">
                  {item.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}
