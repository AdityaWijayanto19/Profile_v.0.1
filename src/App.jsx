import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Hook untuk scroll yang smooth banget
const useSmoothTransform = (value, input, output) => {
  return useSpring(useTransform(value, input, output), {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001,
  });
};

export default function MonotoneBackend() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const videoScale = useSmoothTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const videoOpacity = useSmoothTransform(
    scrollYProgress,
    [0, 0.2],
    [0.8, 0.2]
  );

  return (
    <div
      ref={containerRef}
      className="bg-black text-white selection:bg-white selection:text-black"
    >
      {/* =====================================================
          SECTION 1: THE CORE (HERO)
      ====================================================== */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        {/* Grayscale Video Background */}
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale brightness-125"
          >
            <source src="/videos/ink.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Mix-Blend Typography - Ini yang lo suka */}
        <div className="relative z-10 w-full h-full flex items-center justify-center mix-blend-difference">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-white"
          >
            <h1 className="text-[18vw] font-black leading-[0.75] tracking-tighter uppercase italic">
              SYSTEM
              <br />
              LOGIC.
            </h1>
            <p className="mt-8 font-mono text-sm tracking-[0.5em] uppercase opacity-80">
              Architecting Invisible Infrastructures
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2: MANIFESTO
      ====================================================== */}
      <section className="relative min-h-screen bg-black flex items-center px-10 md:px-32">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-zinc-500 text-xs mb-10 tracking-[0.3em]"
          >
            // 01. PHILOSOPHY
          </motion.p>
          <h2 className="text-4xl md:text-7xl font-light leading-tight tracking-tight">
            I believe in{" "}
            <span className="text-white font-bold">stability by design</span>.
            While others focus on what's seen, I master the{" "}
            <span className="italic text-zinc-500">unseen forces</span> that
            keep systems alive.
          </h2>
        </div>
      </section>

      {/* =====================================================
          SECTION 3: THE ENGINE (STACK) - COLOR ON HOVER
      ====================================================== */}
      <section className="relative py-40 bg-zinc-950">
        <div className="px-10 md:px-32 mb-24">
          <h3 className="text-6xl md:text-9xl font-black text-zinc-900 leading-none select-none">
            CAPABILITIES
          </h3>
        </div>

        <div className="border-t border-zinc-800">
          {[
            {
              title: "Backend Architecture",
              tech: "Golang / Node.js / Rust",
              color: "hover:text-emerald-400",
            },
            {
              title: "Cloud Infrastructure",
              tech: "AWS / Kubernetes / Terraform",
              color: "hover:text-blue-400",
            },
            {
              title: "Data Management",
              tech: "PostgreSQL / Redis / Kafka",
              color: "hover:text-purple-400",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group border-b border-zinc-800 py-16 px-10 md:px-32 flex flex-col md:flex-row justify-between items-center transition-all duration-500 ${item.color}`}
            >
              <span className="font-mono text-zinc-700 group-hover:text-white transition-colors">
                0{i + 1}
              </span>
              <h4 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">
                {item.title}
              </h4>
              <p className="font-mono text-zinc-500 group-hover:text-white transition-colors">
                {item.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SECTION 4: DATA FLOW (PROCESS)
      ====================================================== */}
      <section className="relative min-h-screen bg-black flex flex-col justify-center py-20 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
          {[
            {
              step: "Analysis",
              desc: "Translating business complexity into technical requirements.",
            },
            {
              step: "Development",
              desc: "Writing clean, modular, and highly documented codebases.",
            },
            {
              step: "Optimization",
              desc: "Stress testing and refining for maximum throughput.",
            },
            {
              step: "Deployment",
              desc: "Global scaling with zero-downtime CI/CD pipelines.",
            },
          ].map((proc, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#0a0a0a" }}
              className="bg-black p-16 flex flex-col justify-between aspect-square md:aspect-video"
            >
              <h5 className="text-5xl font-black text-zinc-800 italic uppercase">
                /{proc.step}
              </h5>
              <p className="text-zinc-500 text-lg max-w-xs">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SECTION 5: SYSTEM METRICS (ACHIEVEMENTS)
      ====================================================== */}
      <section className="relative h-screen flex items-center bg-white text-black px-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none italic font-black text-[30vw] leading-none">
          PERFORMANCE
        </div>
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-20">
          {[
            { label: "Uptime", val: "99.9%" },
            { label: "Request/Sec", val: "25k+" },
            { label: "Security", val: "A+" },
          ].map((m, i) => (
            <div key={i} className="border-l-4 border-black pl-8">
              <p className="font-mono text-xs uppercase tracking-[0.5em] mb-4">
                {m.label}
              </p>
              <h6 className="text-7xl md:text-9xl font-black tracking-tighter">
                {m.val}
              </h6>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SECTION 6: THE PIPELINE (SCROLL REVEAL)
      ====================================================== */}
      <section className="relative py-40 bg-black text-center">
        <motion.div
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.75, 0.85, 0.95],
              [0, 1, 0.5]
            ),
          }}
          className="px-6"
        >
          <h2 className="text-6xl md:text-[12vw] font-black uppercase leading-none mb-10">
            Scalable <br /> Thinking.
          </h2>
          <div className="w-1 h-40 bg-gradient-to-b from-white to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* =====================================================
          SECTION 7: HANDSHAKE (CONTACT)
      ====================================================== */}
      <section className="relative h-screen bg-black flex flex-col items-center justify-center px-10 border-t border-zinc-900">
        {/* Hover-only color on the final CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group relative text-center cursor-pointer"
        >
          <span className="font-mono text-xs text-zinc-600 mb-6 block tracking-[1em] uppercase group-hover:text-emerald-500 transition-colors">
            Initialize Connection
          </span>
          <h2 className="text-5xl md:text-[8vw] font-bold tracking-tighter uppercase mb-12 mix-blend-difference">
            Work Together_
          </h2>
          <a
            href="mailto:core@system.dev"
            className="inline-block border border-white px-16 py-6 text-sm font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all"
          >
            [ EXECUTE ]
          </a>
        </motion.div>

        {/* Technical Footer */}
        <div className="absolute bottom-10 w-full px-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-700 gap-4 uppercase tracking-[0.3em]">
          <div className="flex gap-10">
            <span>Status: 200 OK</span>
            <span>Port: 443</span>
          </div>
          <p>© 2026 / Architecture Studio / Profile.Que</p>
          <div className="flex gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">
              Github
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              LinkedIn
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
