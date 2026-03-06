import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <ScrollReveal className="mb-12 lg:mb-16">
      {label && (
        <span className="font-heading text-sm font-bold text-teal tracking-[0.15em] uppercase block mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg lg:text-xl text-n300 mt-4 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
