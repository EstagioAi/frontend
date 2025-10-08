import React from "react"
import Navigation from "@/components/global/Navigation"
import Footer from "@/components/global/Footer"
import BackgroundShapes from "@/components/ui/background-shapes.jsx"
import HeroSection from "./sections/HeroSection"
import EssenceSection from "./sections/EssenceSection"
import ApproachSection from "./sections/ApproachSection"
import MilestonesSection from "./sections/MilestonesSection"
import ValuesSection from "./sections/ValuesSection"

export default function Sobre() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary-ds text-primary-ds">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <BackgroundShapes
          variant="mesh"
          opacity={0.08}
          color="rgba(130, 247, 179, 0.55)"
          accentColor="rgba(15, 15, 15, 0.16)"
          accentOpacity={0.12}
          blendMode="normal"
        />
        <BackgroundShapes
          variant="orbits"
          opacity={0.07}
          color="rgba(130, 247, 179, 0.45)"
          accentColor="rgba(15, 15, 15, 0.12)"
          accentOpacity={0.1}
          blendMode="soft-light"
        />
      </div>

      <Navigation />

      <main
        id="main-content"
        className="relative flex flex-col gap-0"
        role="main"
        aria-label="Página institucional da EstágioAI"
      >
        <section aria-label="Visão geral da EstágioAI">
          <HeroSection />
        </section>

        <section aria-label="Missão e proposta de valor">
          <EssenceSection />
        </section>

        <section aria-label="Como entregamos a experiência completa">
          <ApproachSection />
        </section>

        <section aria-label="Marcos principais da EstágioAI">
          <MilestonesSection />
        </section>

        <section aria-label="Valores que orientam nossa cultura">
          <ValuesSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}

const ImpactHighlight = React.memo(function ImpactHighlight({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white-ds/12 px-4 py-5 text-white-ds backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white-ds/60">{title}</div>
      <div className="mt-2 text-base font-semibold text-white-ds">{subtitle}</div>
    </div>
  );
});

ImpactHighlight.displayName = 'ImpactHighlight';

