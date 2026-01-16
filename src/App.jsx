import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const SECTIONS_DATA = [
  { title: "SYSTEM ARCHITECTURE", color: "#10b981", bg: "#050807", label: "01. CORE" },
  { title: "DATABASE SCHEMA", color: "#f43f5e", bg: "#080505", label: "02. PERSIST" },
  { title: "SECURITY LAYER", color: "#a855f7", bg: "#060508", label: "03. ENCRYPT" },
  { title: "API GATEWAY", color: "#3b82f6", bg: "#050608", label: "04. ROUTE" },
  { title: "INFRASTRUCTURE", color: "#f59e0b", bg: "#080705", label: "05. DEPLOY" }
];

// --- THE REAL APEX PREDATOR (HAND-CRAFTED SVG PATH) ---
const BeastEngine = ({ progress, color }) => {
  const stepFreq = 45; 
  
  // Pergerakan kaki diagonal yang berat
  const legA = useTransform(progress, p => Math.sin(p * stepFreq) * 12);
  const legB = useTransform(progress, p => Math.sin(p * stepFreq + Math.PI) * 12);
  
  // Goyangan pundak saat berjalan
  const sway = useTransform(progress, p => Math.sin(p * stepFreq) * 2);

  return (
    <div className="relative w-32 h-48 flex items-center justify-center translate-y-4">
      <svg viewBox="0 0 120 180" className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]">
        <defs>
          <linearGradient id="bodyShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
          </linearGradient>
        </defs>

        {/* 1. KAKI BELAKANG (Paha Besar & Berotot) */}
        <motion.path 
            style={{ y: legB }}
            d="M25 25 Q15 25 15 45 Q15 65 25 65 L40 60 L38 25 Z" fill={color} opacity="0.6" 
        />
        <motion.path 
            style={{ y: legA }}
            d="M95 25 Q105 25 105 45 Q105 65 95 65 L80 60 L82 25 Z" fill={color} opacity="0.6" 
        />

        {/* 2. BADAN UTAMA (Grizzly Silhouette: Pear-Shaped Muscle) */}
        {/* Lebar di panggul, mengecil di pinggang, lebar luar biasa di pundak depan */}
        <motion.path 
          style={{ rotate: sway }}
          d="M60 15 C35 15 22 45 28 85 C32 130 15 155 60 165 C105 155 88 130 92 85 C98 45 85 15 60 15 Z" 
          fill={color} 
        />
        
        {/* 3. DETAIL PUNDAK (The Heavy Hump Detail) */}
        <motion.path 
          style={{ rotate: sway }}
          d="M38 120 Q60 138 82 120" 
          fill="none" stroke="black" strokeWidth="8" opacity="0.15" strokeLinecap="round"
        />

        {/* 4. KAKI DEPAN (Pundak Lebar dengan Cakar Predator) */}
        {/* Kiri Depan */}
        <motion.g style={{ y: legA, x: sway }}>
          <path d="M15 105 Q2 105 2 135 L18 150 L32 130 L28 105 Z" fill={color} />
          {/* Cakar Melengkung Tajam (Hooked Claws) */}
          <path d="M4 145 Q2 165 0 170 M8 148 Q7 168 7 173 M13 150 Q13 170 13 175 M18 148 Q20 168 20 173 M23 145 Q25 165 26 170" 
                stroke="black" strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round" />
        </motion.g>

        {/* Kanan Depan */}
        <motion.g style={{ y: legB, x: sway }}>
          <path d="M105 105 Q118 105 118 135 L102 150 L88 130 L92 105 Z" fill={color} />
          {/* Cakar Melengkung Tajam (Hooked Claws) */}
          <path d="M116 145 Q118 165 120 170 M112 148 Q113 168 113 173 M107 150 Q107 170 107 175 M102 148 Q100 168 100 173 M97 145 Q95 165 94 170" 
                stroke="black" strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round" />
        </motion.g>

        {/* 5. KEPALA PREDATOR (Facing Downwards - Small & Aggressive) */}
        <g transform="translate(60, 148)">
          {/* Kepala & Moncong */}
          <path d="M-16 -15 Q0 8 16 -15 L14 15 Q0 30 -14 15 Z" fill={color} />
          {/* Kuping Grizzly (Menonjol di samping) */}
          <circle cx="-14" cy="-12" r="5.5" fill={color} />
          <circle cx="14" cy="-12" r="5.5" fill={color} />
          {/* Detail Moncong (Hidung) */}
          <path d="M-6 16 Q0 28 6 16 L0 32 Z" fill="black" opacity="0.4" />
          <circle cx="0" cy="30" r="2.5" fill="black" />
        </g>
        
        {/* 6. BODY LIGHTING (Biar gak flat) */}
        <motion.path 
          style={{ rotate: sway }}
          d="M60 15 C35 15 22 45 28 85 C32 130 15 155 60 165 C105 155 88 130 92 85 C98 45 85 15 60 15 Z" 
          fill="url(#bodyShine)" 
        />
      </svg>
    </div>
  );
};

const BearPawTrail = ({ color, style, side }) => (
  <motion.svg 
    style={style}
    viewBox="0 0 24 24" 
    fill={color} 
    className={`w-6 h-6 rotate-180 ${side === 'left' ? '-rotate-[195deg]' : 'rotate-[195deg]'}`}
  >
    <path d="M12,2C10.9,2,10,2.9,10,4s0.9,2,2,2s2-0.9,2-2S13.1,2,12,2z M7,4C5.9,4,5,4.9,5,6s0.9,2,2,2s2-0.9,2-2S8.1,4,7,4z M17,4 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S18.1,4,17,4z M12,8c-3.3,0-6,2.7-6,6c0,2.2,1.8,4,4,4c0.7,0,1.4-0.2,2-0.5 c0.6,0.3,1.3,0.5,2,0.5c2.2,0,4-1.8,4-4C18,10.7,15.3,8,12,8z" />
  </motion.svg>
);

const FlowSection = ({ data, index }) => {
  const sectionRef = useRef(null);
  const isLeftContent = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 100%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  // LOGIKA EMAS ANDA: 0.6 -> 0.97 + CLAMP
  const flowProgress = useTransform(smoothProgress, [0, 1], [0.05, 0.97], { clamp: true });

  const paws = Array.from({ length: 14 });

  return (
    <section 
      ref={sectionRef} 
      style={{ backgroundColor: data.bg }}
      className="relative min-h-screen w-full flex items-center px-10 md:px-32 py-40 overflow-hidden"
    >
      <div 
        className={`absolute top-0 bottom-0 w-24 z-10 flex flex-col justify-between py-24
          ${isLeftContent ? 'left-4 md:left-24' : 'right-4 md:right-24'}
        `}
      >
        <motion.div
          style={{ 
            top: useTransform(flowProgress, [0, 1], ["0%", "100%"]),
            y: "-50%" 
          }}
          className="absolute left-0 right-0 flex justify-center z-30 pointer-events-none"
        >
          <BeastEngine progress={smoothProgress} color={data.color} />
        </motion.div>

        {paws.map((_, i) => {
          const isLeftPaw = i % 2 === 0;
          const threshold = i / (paws.length - 1);
          return (
            <div key={i} className={`flex w-full ${isLeftPaw ? 'justify-start px-1' : 'justify-end px-1'}`}>
              <BearPawTrail 
                side={isLeftPaw ? 'left' : 'right'}
                color={data.color}
                style={{ 
                  opacity: useTransform(flowProgress, [threshold, threshold + 0.02], [0, 0.35]),
                  scale: useTransform(flowProgress, [threshold, threshold + 0.02], [0.5, 1]),
                }}
              />
            </div>
          );
        })}
      </div>

      <div className={`w-full flex flex-col ${!isLeftContent ? 'items-end text-right' : 'items-start text-left'}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-40 max-w-2xl"
        >
          <span className="font-mono text-xs tracking-[0.8em] mb-4 block uppercase font-bold" style={{ color: data.color }}>
            &gt; CORE_LOG: {data.label}
          </span>
          <h2 className="text-7xl md:text-[10vw] font-black tracking-tighter mb-8 text-white uppercase italic leading-[0.8]">
            {data.title.split(' ')[0]}<br/>
            <span style={{ WebkitTextStroke: `1px ${data.color}`, color: "transparent", opacity: 0.3 }}>
              {data.title.split(' ')[1]}
            </span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-md italic border-l-2 border-zinc-900 pl-6">
            "Sistem backend yang tangguh, meninggalkan jejak performa yang presisi."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default function ApexPredatorFinal() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <section className="h-screen flex items-center justify-center bg-[#020202]">
        <div className="text-center relative">
          <h1 className="text-7xl md:text-[14vw] font-black italic tracking-tighter uppercase leading-[0.7] opacity-20">
            APEX<br/>CORE
          </h1>
          <p className="font-mono text-[10px] tracking-[1.5em] text-zinc-800 mt-10 uppercase font-bold">Initializing Predator Engine</p>
        </div>
      </section>

      <div className="relative">
        {SECTIONS_DATA.map((section, index) => (
          <FlowSection key={index} data={section} index={index} />
        ))}
      </div>

      <footer className="h-screen flex flex-col items-center justify-center bg-[#020202] border-t border-zinc-900">
        <h3 className="text-zinc-800 text-xs font-mono tracking-[1.5em] uppercase italic">Territory Established</h3>
      </footer>
    </div>
  );
}