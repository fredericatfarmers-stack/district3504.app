import { careerPageUrl } from "../data/paths";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal as="h2">Ready to see what fits?</Reveal>
        <Reveal as="p">
          Every path above leads to a real, current opening — no forms into
          the void, no waiting to hear back.
        </Reveal>
        <Reveal className="final-actions">
          <a
            href={careerPageUrl}
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            Explore All Paths
          </a>
        </Reveal>
      </div>
    </section>
  );
}
