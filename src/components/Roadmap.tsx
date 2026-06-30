import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, TrendingUp, Flame, Zap } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const milestones = [
  {
    year: '2026',
    icon: Factory,
    title: 'Commissioning',
    detail: '10T induction furnace + 2-strand CCM live at Venkatapura. 100 TPD melting capacity.',
  },
  {
    year: '2031',
    icon: TrendingUp,
    title: 'Capacity Scale-Up',
    detail: 'Melting capacity scaled from 100 TPD to 600 TPD through phased furnace and caster additions.',
  },
  {
    year: '2035',
    icon: Flame,
    title: 'Sponge Iron Kiln',
    detail: 'A DRI rotary kiln comes online in the Ballari-Koppal belt, feeding clean charge back into the melt shop.',
  },
  {
    year: '2035',
    icon: Zap,
    title: 'Captive Power',
    detail: 'A captive power plant in the same Ballari-Koppal cluster, cutting grid dependence for the next phase.',
  },
];

function MilestoneCard({ m, index }: { m: typeof milestones[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = m.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-3 bg-card rounded-2xl p-6 h-full"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-ember text-xs tracking-widest">{m.year}</span>
        <div className="w-9 h-9 rounded-lg bg-ember/10 flex items-center justify-center">
          <Icon size={16} className="text-ember" />
        </div>
      </div>
      <h3 className="text-primary text-base sm:text-lg font-display font-semibold">{m.title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{m.detail}</p>
    </motion.div>
  );
}

export default function Roadmap() {
  const trackRef = useRef(null);
  const trackInView = useInView(trackRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-carbon py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <div className="text-ember font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-4">
            Capacity Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={[{ text: '100 tonnes a day today.', className: 'text-primary' }]}
              containerClassName="block mb-2"
            />
            <WordsPullUpMultiStyle
              segments={[{ text: '600 tonnes a day by 2031.', className: 'text-gray-500' }]}
              containerClassName="block"
            />
          </h2>
        </div>

        {/* progress track */}
        <div ref={trackRef} className="relative h-1 bg-white/10 rounded-full mb-14 max-w-4xl mx-auto overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 heat-line rounded-full"
            initial={{ width: '0%' }}
            animate={trackInView ? { width: '100%' } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m, i) => (
            <MilestoneCard key={`${m.year}-${m.title}`} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
