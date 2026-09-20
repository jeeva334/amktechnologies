export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl border border-edge shadow-card overflow-hidden group">
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5">
        <span className="text-[11px] font-bold uppercase tracking-wide text-blue-bright">{project.category}</span>
        <h3 className="font-semibold text-ink text-lg mt-1">{project.title}</h3>
        <p className="text-sm text-muted mt-1.5">{project.description}</p>
      </div>
    </div>
  );
}
