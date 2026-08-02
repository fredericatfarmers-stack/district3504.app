import Reveal from "./Reveal";

export default function VoiceSection() {
  return (
    <section className="voice-section">
      <div className="container">
        <Reveal as="p" className="voice-quote">
          &quot;If life is slipping by, and you&apos;ve decided to revive your
          dreams once again — we should talk. There is a way, but the path is
          hard. This is not for everyone. But if you choose it, we&apos;ll be
          with you every step.&quot;
        </Reveal>
        <Reveal className="voice-attr">
          — Frederic St Laurent, Agency Development Manager
        </Reveal>
      </div>
    </section>
  );
}
