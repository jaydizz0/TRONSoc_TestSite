export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="pt-[calc(72px+70px)] pb-12 border-b border-[#2c4775] relative overflow-hidden">
      {/* orange radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(242,101,34,0.12),transparent_55%)] pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-10 relative">
        <span className="inline-flex items-center gap-3 font-display text-[0.78rem] tracking-[0.32em] uppercase text-[#F26522] mb-4 before:block before:w-8 before:h-0.5 before:bg-[#F26522]">
          {eyebrow}
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#9aa9c4] max-w-xl mt-4 text-base leading-relaxed">{subtitle}</p>
        )}
      </div>
    </header>
  )
}
