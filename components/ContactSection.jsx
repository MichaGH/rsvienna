export default function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-6 text-3xl md:text-5xl font-light tracking-tight text-zinc-100">
            Get in touch
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-white/15" />

          <p className="mx-auto mt-10 max-w-xl text-[15px] leading-relaxed text-zinc-300 md:text-base">
            For inquiries, collaboration, or further information, please contact
            us at:
          </p>

          <div className="mt-12">
            <a
              href="mailto:info.rsvienna@yahoo.com"
              className="inline-block text-xl md:text-2xl font-light tracking-wide text-zinc-100 transition duration-300 hover:text-white hover:-translate-y-0.5"
            >
              info.rsvienna@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
