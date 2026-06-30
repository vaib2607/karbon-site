import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  showMark?: boolean; // appends a small superscript mark after the final word
  markText?: string;
  delayStart?: number;
}

export default function WordsPullUp({ text, className = '', showMark = false, markText = '', delayStart = 0 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.28em]">
          <motion.span
            className="inline-block relative"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: delayStart + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {showMark && i === words.length - 1 && (
              <span className="absolute top-[0.05em] -right-[0.5em] text-[0.32em] text-ember">{markText}</span>
            )}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
