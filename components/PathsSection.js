import { paths } from "../data/paths";
import Reveal from "./Reveal";

export default function PathsSection() {
  return (
    <section className="path-section" id="paths">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Choose Your Path</span>
          <h2 className="section-title">Five ways in. One direction: forward.</h2>
          <p className="section-desc">
            Wherever you&apos;re starting from — sales background, agency
            experience, or capital ready to deploy — there&apos;s a track
            built for it. Every path below leads to a real, current opening.
          </p>
        </Reveal>

        <div className="path-track">
          {paths.map((path) => (
            <Reveal key={path.title} className="path-card">
              <div className="path-node">{path.number}</div>
              <div className="path-body">
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <div className="path-tags">
                  {path.tags.map((tag) => (
                    <span className="path-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={path.workableUrl}
                target="_blank"
                rel="noopener"
                className="path-cta"
              >
                View Openings →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
