export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      {/* center content */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Website in progress
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-light tracking-tight">
            This page is currently under reconstruction
          </h1>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-400">
            We are carefully preparing a space dedicated to supportive music and
            self-regulation for children and adolescents in Vienna.  
            Please return soon to explore the full initiative.
          </p>
        </div>
      </div>

      {/* footer */}
      <footer className="border-t border-white/10 px-6 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Resonance Space Vienna · Vienna, Austria
      </footer>
    </main>
  );
}
