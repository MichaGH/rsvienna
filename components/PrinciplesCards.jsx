// Smaller + more “designed” (no cheap gradients), keep nice hover
export default function PrinciplesCards() {
  const items = [
    {
      title: "Voluntary participation",
      desc: "Children choose how they engage — observing, playing, or resting at any moment.",
    },
    {
      title: "Trauma-informed framework",
      desc: "Sessions are guided by qualified music educators and experienced professionals.",
    },
    {
      title: "Music as a resource",
      desc: "Sound and expression support emotional regulation, not performance or results.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* subtle background texture (no gradients) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.28]">
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-zinc-950/75" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center shadow-[0_1px_0_rgba(255,255,255,0.07),0_18px_45px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* top “cap” + glow (no gradients) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute left-1/2 top-10 h-44 w-44 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute left-6 right-6 top-0 h-px bg-white/25" />
              </div>

              {/* subtle inner frame + corner marks */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
              <span className="pointer-events-none absolute left-5 top-5 h-3 w-3 rounded-[3px] border border-white/10 opacity-70" />
              <span className="pointer-events-none absolute right-5 top-5 h-3 w-3 rounded-[3px] border border-white/10 opacity-70" />
              <span className="pointer-events-none absolute left-5 bottom-5 h-3 w-3 rounded-[3px] border border-white/10 opacity-70" />
              <span className="pointer-events-none absolute right-5 bottom-5 h-3 w-3 rounded-[3px] border border-white/10 opacity-70" />

              {/* content */}
              <div className="relative mx-auto flex max-w-sm flex-col items-center">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-sm font-semibold tabular-nums text-zinc-100">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-lg md:text-xl font-medium tracking-tight text-zinc-100">
                  {item.title}
                </h3>

                <div className="mt-4 h-px w-14 bg-white/20" />

                <p className="mt-7 text-[15px] leading-relaxed text-zinc-300">
                  {item.desc}
                </p>

                {/* tiny detail */}
                <div className="mt-9 flex items-center gap-2 opacity-70">
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span className="h-[2px] w-10 rounded bg-white/10" />
                  <span className="h-1 w-1 rounded-full bg-white/18" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
