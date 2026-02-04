"use client";
import ContactSection from "@/components/ContactSection";
import PrinciplesCards from "@/components/PrinciplesCards";
import LightRays from "@/components/react-bits/LightRays";
import Threads from "@/components/react-bits/Threads";
import SupervisionSection from "@/components/SupervisionSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-zinc-950 text-zinc-100 font-sans">
			<section className="relative min-h-[100vh] flex items-center overflow-hidden">
				{/* Background media */}
				<div className="absolute inset-0">
					<video
						src="/videos/herovideo_bw.mp4"
						autoPlay
						muted
						loop
						playsInline
						className="h-full w-full object-cover opacity-40"
					/>
					{/* 
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-950" />
					 */}
				</div>

				<div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
					{/* soft halo */}
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
						<div className="h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
					</div>

					<div className="relative mx-auto max-w-3xl">
						<p className="text-xs uppercase tracking-[0.45em] text-zinc-400">
							Vienna · Non-profit initiative
						</p>

						<h1 className="mt-6 text-4xl md:text-6xl font-light tracking-tight">
							<span className="block text-zinc-200">Resonance Space</span>
							<span className="block text-white">Vienna</span>
						</h1>

						<div className="mx-auto mt-6 h-px w-24 bg-white/20" />

						<p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-zinc-300 leading-relaxed">
							A supportive music and self-regulation space for children and
							adolescents.
						</p>

						<div className="mt-10 flex justify-center gap-4">
							<Link
								href="#about"
								className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
							>
								About the initiative
							</Link>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-3 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20 transition"
							>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ABOUT */}
			<section id="about" className="bg-zinc-950 relative">
				<div className="absolute inset-0 z-0">
					<LightRays
						raysOrigin="top-center"
						raysColor="#ffffff"
						raysSpeed={1}
						lightSpread={0.5}
						rayLength={3}
						followMouse={true}
						mouseInfluence={0.1}
						noiseAmount={0}
						distortion={0}
						className="custom-rays"
						pulsating={false}
						fadeDistance={0.1}
						saturation={1}
					/>
				</div>
				<div className="mx-auto max-w-4xl px-6 py-28 text-center relative z-10">
					<p className="text-xs uppercase tracking-[0.5em] text-zinc-500">
						About the initiative
					</p>

					<h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-zinc-100">
						A safe and supportive music space
					</h2>

					<div className="mx-auto mt-10 h-px w-20 bg-white/15" />

					<div className="mx-auto mt-12 max-w-2xl  text-base leading-relaxed text-zinc-300">
						<div className="text-lg md:text-xl text-zinc-300 leading-relaxed space-y-8">
							<p className="">
								We are a Vienna-based, non-profit initiative offering a safe and
								supportive music space for children and adolescents who have
								experienced stress, displacement, or traumatic life events.
							</p>

							<p>
								Participation is entirely voluntary. A child may join, observe,
								play, pause, or stop at any time. There are no performances, no
								assessments, no competitions, and no expectations of results.
							</p>

							<p>
								Musical activity is used as a resource for emotional regulation,
								self-expression, and recovery — not as a goal in itself.
							</p>
						</div>
					</div>

					{/* subtle bottom cue */}
					<div className="mx-auto mt-14 h-px w-10 bg-white/10" />
				</div>
			</section>

			<SectionDivider />
			<PrinciplesCards />
			<SectionDivider />

			{/* SUPERVISION */}
            <SupervisionSection />
			

			{/* CONTACT */}
<ContactSection />

			{/* FOOTER */}
			<footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-zinc-500">
				© {new Date().getFullYear()} Resonance Space Vienna · Vienna, Austria
			</footer>
		</main>
	);
}

function SectionDivider() {
	return (
		<div className="mx-auto max-w-6xl px-6">
			<div className="h-px w-full bg-white/10" />
		</div>
	);
}
