import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal as="h2">Ready to see what fits?</Reveal>
        <Reveal as="p">
          Explore the current career and agency ownership paths available
          through Farmers Insurance District 3504 in Dallas–Fort Worth.
        </Reveal>
        <Reveal className="final-actions">
          <a href="/careers" className="btn-primary">
            Explore All Career Paths
          </a>
        </Reveal>
      </div>
    </section>
  );
}
