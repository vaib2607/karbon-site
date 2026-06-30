import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Flame } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

interface CardData {
  number: string;
  title: string;
  items: string[];
}

const cards: CardData[] = [
  {
    number: '01',
    title: 'Melting & Refining',
    items: [
      '10-tonne induction furnace, scrap charge mix',
      'Bath chemistry checked each heat',
      'Alloy addition to target grade',
      'Slag drawn before tapping',
    ],
  },
  {
    number: '02',
    title: 'Continuous Casting',
    items: [
      '2-strand CCM, billet section sized to order',
      'Controlled cooling along the strand',
      'Cut-to-length at the shear',
    ],
  },
  {
    number: '03',
    title: 'Rolling & Dispatch',
    items: [
      'Reheated and rolled to finished section',
      'Dimensional QC before bundling',
      'Loaded and dispatched by road',
    ],
  },
];

function ProcessCard({ card, index }: { card: CardData; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card rounded-2xl p-6 flex flex-col h-full"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-ember/10 flex items-center justify-center mb-6">
        <Flame size={18} className="text-ember" />
      </div>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-mono text-ember text-xs">{card.number}</span>
        <h3 className="text-primary text-lg sm:text-xl font-display font-semibold">{card.title}</h3>
      </div>
      <ul className="flex flex-col gap-3 flex-1">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
            <Check size={14} className="text-primary mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm mt-6 group w-fit">
        Learn more
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" style={{ transform: 'rotate(-45deg)' }} />
      </a>
    </motion.div>
  );
}

function MoltenCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden min-h-[220px] lg:min-h-0 lg:h-full"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_30%_110%,#FF5A1F_0%,#3a1505_45%,#0A0908_75%)]" />
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(255,208,154,0.25), transparent 70%)' }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="bg-noise absolute inset-0 opacity-[0.12] mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-[#E8E4DC] text-sm sm:text-base font-medium leading-snug">
          Where scrap becomes steel.
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="min-h-screen bg-carbon py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="bg-noise absolute inset-0 opacity-[0.1] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Engineered flow from scrap to saleable steel.', className: 'text-primary' },
              ]}
              containerClassName="block mb-2"
            />
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Verified at every heat, every strand, every bundle.', className: 'text-gray-500' },
              ]}
              containerClassName="block"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          <MoltenCard />
          {cards.map((card, i) => (
            <ProcessCard key={card.number} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
