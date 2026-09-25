import { careerPageUrl } from "../data/paths";

const agencyMapUrl =
  "https://www.google.com/maps/d/u/0/edit?mid=1uiq5HA9NqchfpWCsu2AdMpXI9XHztEw&usp=sharing";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-brand">
          DISTRICT <span>3504</span>
        </div>
        <div className="nav-links">
          <a href="/#paths">Paths</a>
          <a href="/#team">Team</a>
          <a href="/#clarity">About Us</a>
          <a href={agencyMapUrl} target="_blank" rel="noopener noreferrer">
            Agencies
          </a>
        </div>
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
