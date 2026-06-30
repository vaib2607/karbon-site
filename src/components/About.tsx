import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import ScrollRevealParagraph from './ScrollRevealParagraph';

export default function About() {
  return (
    <section id="about" className="bg-carbon py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-slab rounded-2xl md:rounded-[2rem] px-6 py-14 sm:px-12 sm:py-20 text-center">
        <div className="text-ember font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-6">
          Secondary Steel
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-[1.05] sm:leading-[1] font-display font-medium">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'We are Karbon Agro Rerollers,', className: 'text-primary' },
              { text: 'an induction furnace plant with a 2-strand CCM,', className: 'italic text-steel' },
              { text: 'commissioning now in Pavagada Taluk.', className: 'text-primary' },
            ]}
          />
        </h2>

        <div className="mt-10 max-w-2xl mx-auto">
          <ScrollRevealParagraph
            className="text-primary text-xs sm:text-sm md:text-base leading-relaxed"
            text="Sited on Sy. No. 488/5, 469/2 and 468/3 in Venkatapura village, right on the Andhra Pradesh border, the plant takes scrap charge through a 10-tonne induction furnace, casts continuous billet on two strands, and rolls finished product to spec. Construction is backed by SIDBI term debt and a Karnataka Industrial Policy incentive package."
          />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto pt-8 border-t border-white/10">
          {[
            { label: 'Furnace', value: '10T Induction' },
            { label: 'Casting', value: '2-Strand CCM' },
            { label: 'Plot Area', value: '27,316 sq.m' },
            { label: 'Built-up', value: '16,187 sq.m' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-[10px] text-steel uppercase tracking-wide mb-1">{stat.label}</div>
              <div className="text-primary text-sm sm:text-base font-medium">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
