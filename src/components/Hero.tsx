import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const navItems = ['Overview', 'Capacity', 'Process', 'Compliance', 'Inquiries'];

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-carbon">
        {/* molten backdrop: layered radial glows standing in for furnace footage */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,#3a1505_0%,#0A0908_55%)]" />
          <motion.div
            className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[140%] h-[70%] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(255,90,31,0.35), transparent 70%)' }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="noise-overlay absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

        {/* navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] sm:text-xs md:text-sm transition-colors"
                style={{ color: 'rgba(232, 228, 220, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E8E4DC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232, 228, 220, 0.8)')}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-8">
              <h1
                className="font-display font-bold leading-[0.85] tracking-[-0.02em] text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw]"
                style={{ color: '#E8E4DC' }}
              >
                <WordsPullUp text="KARBON AGRO" showMark markText="Fe" />
              </h1>
              <div className="font-mono text-[10px] sm:text-xs text-ember mt-1 tracking-wide">
                REROLLERS LLP — PAVAGADA, KARNATAKA
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col gap-4 sm:gap-6 mt-6 md:mt-0">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.3]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                A 10-tonne induction furnace and 2-strand CCM on the Karnataka–Andhra Pradesh
                border, scaling from 100 TPD to 600 TPD melting capacity by 2031.
              </motion.p>

              <motion.a
                href="#about"
                className="group inline-flex items-center justify-between bg-primary rounded-full pl-5 pr-1.5 py-1.5 w-fit gap-6 hover:gap-3 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-black font-medium text-sm sm:text-base whitespace-nowrap">
                  See the build
                </span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <ArrowRight size={16} className="text-primary" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
