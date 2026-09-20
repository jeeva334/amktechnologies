import ScrollReveal from './ScrollReveal.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';
  return (
    <ScrollReveal className={`flex flex-col gap-3 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className={`text-xs font-bold uppercase tracking-widest ${light ? 'text-yellow' : 'text-blue-bright'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {description && (
        <p className={`text-base sm:text-lg ${light ? 'text-white/75' : 'text-muted'}`}>{description}</p>
      )}
    </ScrollReveal>
  );
}
