export default function PageHero({ title, description }) {
  return (
    <section className="bg-navy py-14 sm:py-20">
      <div className="container-page">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl">{title}</h1>
        {description && <p className="mt-4 text-white/75 text-base sm:text-lg max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}
