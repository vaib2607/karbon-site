import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

// Simple isometric projector: iso(x, y) maps a ground-plane point to screen space.
const ISO_X = 28; // half-width of one ground unit, x direction
const ISO_Y = 14; // half-height of one ground unit, x direction
function iso(gx: number, gy: number) {
  return {
    x: (gx - gy) * ISO_X,
    y: (gx + gy) * ISO_Y,
  };
}

interface BoxProps {
  gx: number; // ground x
  gy: number; // ground y
  w: number; // width in ground units
  d: number; // depth in ground units
  h: number; // height in screen px
  top: string;
  left: string;
  right: string;
}

function IsoBox({ gx, gy, w, d, h, top, left, right }: BoxProps) {
  const p0 = iso(gx, gy);
  const p1 = iso(gx + w, gy);
  const p2 = iso(gx + w, gy + d);
  const p3 = iso(gx, gy + d);

  const topPts = [p0, p1, p2, p3].map((p) => `${p.x},${p.y - h}`).join(' ');
  const leftPts = [
    { x: p0.x, y: p0.y - h }, { x: p3.x, y: p3.y - h }, { x: p3.x, y: p3.y }, { x: p0.x, y: p0.y },
  ].map((p) => `${p.x},${p.y}`).join(' ');
  const rightPts = [
    { x: p3.x, y: p3.y - h }, { x: p2.x, y: p2.y - h }, { x: p2.x, y: p2.y }, { x: p3.x, y: p3.y },
  ].map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <g>
      <polygon points={leftPts} fill={left} />
      <polygon points={rightPts} fill={right} />
      <polygon points={topPts} fill={top} stroke="rgba(0,0,0,0.15)" strokeWidth={0.5} />
    </g>
  );
}

function GroundPlane() {
  // L-shaped plot outline, echoing the approved site boundary
  const pts = [
    iso(0, 0), iso(9, 0), iso(9, 11), iso(5.5, 11), iso(5.5, 7.5), iso(0, 7.5),
  ];
  const pointsStr = pts.map((p) => `${p.x},${p.y}`).join(' ');
  return <polygon points={pointsStr} fill="#161310" stroke="#FF5A1F" strokeOpacity={0.35} strokeWidth={1} />;
}

export default function SiteMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-carbon py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-ember font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-4">
            Sy. No. 488/5, 469/2, 468/3 — Venkatapura
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'The site, laid out on the approved plan.', className: 'text-primary' },
              ]}
            />
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-slab rounded-2xl md:rounded-[2rem] p-6 sm:p-10 overflow-x-auto"
        >
          <svg viewBox="-60 -260 480 380" className="w-full max-w-3xl mx-auto" style={{ overflow: 'visible' }}>
            <GroundPlane />

            {/* Furnace Shed */}
            <IsoBox gx={1} gy={1} w={3} d={2.2} h={46} top="#3a1505" left="#FF5A1F" right="#B8421A" />
            {/* Rolling Mill Shed */}
            <IsoBox gx={1} gy={3.6} w={3} d={2.6} h={34} top="#2a2620" left="#8B8680" right="#5e5a52" />
            {/* Labour Quarters */}
            <IsoBox gx={0.4} gy={6.6} w={1.8} d={1.2} h={20} top="#2a2620" left="#615c52" right="#46423a" />
            {/* Substation */}
            <IsoBox gx={5.6} gy={1} w={1.2} d={1.2} h={16} top="#2a2620" left="#7a756a" right="#54504a" />
            {/* Green belt strip, narrow box along east edge */}
            <IsoBox gx={6.9} gy={0.5} w={0.5} d={10} h={3} top="#3b5c2e" left="#2e4823" right="#24391b" />
          </svg>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 font-mono text-[10px] sm:text-xs text-steel">
            <span><span className="text-ember">■</span> Furnace shed</span>
            <span><span className="text-gray-300">■</span> Rolling mill shed</span>
            <span><span className="text-gray-400">■</span> Labour quarters / sub-station</span>
            <span><span className="text-green-700">■</span> Green belt</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto pt-10 mt-10 border-t border-white/10 text-center">
          {[
            { label: 'Built-up', value: '59.25%' },
            { label: 'Green belt', value: '22.96%' },
            { label: 'Vacant', value: '17.80%' },
            { label: 'Border', value: 'AP / KA' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-mono text-[10px] text-steel uppercase tracking-wide mb-1">{s.label}</div>
              <div className="text-primary text-sm sm:text-base font-medium">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
