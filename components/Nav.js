import { careerPageUrl } from "../data/paths";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <a href="/" className="nav-brand" aria-label="District 3504 home">
          DISTRICT <span>3504</span>
        </a>
        <div className="nav-links">
          <a href="/#paths">Paths</a>
          <a href="/#team">Team</a>
          <a href="/#clarity">About Us</a>
          <a href="/agencies">Agencies</a>
        </div>
        <a href="/agencies" className="mobile-agencies">
          Agencies
        </a>
        <a
          href={careerPageUrl}
          target="_blank"
          rel="noopener"
          className="nav-cta"
        >
          Explore Openings
        </a>
      </div>
    </nav>
  );
}
