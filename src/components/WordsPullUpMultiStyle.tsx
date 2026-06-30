import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface Props {
  segments: Segment[];
  containerClassName?: string;
}

export default function WordsPullUpMultiStyle({ segments, containerClassName = '' }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  let globalIndex = 0;

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {segments.map((seg, segIdx) => {
        const words = seg.text.split(' ');
        return words.map((word, wIdx) => {
          const idx = globalIndex++;
          return (
            <span key={`${segIdx}-${wIdx}`} className="overflow-hidden inline-block mr-[0.28em]">
              <motion.span
                className={`inline-block ${seg.className ?? ''}`}
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        });
      })}
    </span>
  );
}
