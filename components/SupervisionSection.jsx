import Image from "next/image";

export default function SupervisionSection() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Professional supervision
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight text-zinc-100">
              Guided by experience and care
            </h2>


            <p className="mt-8 text-[15px] leading-relaxed text-zinc-300">
              Sessions are conducted in a trauma-informed framework and supervised by
              qualified music educators and professionals, including specialists with
              experience working with children affected by war and forced migration,
              particularly from Ukraine.
            </p>


          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_1px_0_rgba(255,255,255,0.06),0_24px_60px_rgba(0,0,0,0.55)]">
              <Image
                src="/images/image1.png"
                alt="Music session space"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-90"
                priority={false}
              />

              {/* no cheap gradients — just subtle vignette */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
              <div className="pointer-events-none absolute inset-0 opacity-60 [box-shadow:inset_0_-90px_120px_rgba(0,0,0,0.55)]" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/25 opacity-60" />
            </div>

         </div>
        </div>
      </div>
    </section>
  );
}
