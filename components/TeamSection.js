import Image from "next/image";
import { team, financialServicesTeam } from "../data/team";
import Reveal from "./Reveal";

function initials(name) {
  return name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

function TeamCard({ member }) {
  return (
    <Reveal className="team-card">
      <div className="team-photo">
        <Image
          src={member.photo}
          alt={member.name}
          width={400}
          height={400}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <span className="team-photo-fallback">{initials(member.name)}</span>
      </div>
      <div className="team-name">{member.name}</div>
      <div className="team-role">{member.role}</div>
      {member.bio ? <div className="team-bio">{member.bio}</div> : null}
    </Reveal>
  );
}

export default function TeamSection() {
  return (
    <section id="team">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">The District 04 Team</span>
          <h2 className="section-title">The people behind the path.</h2>
          <p className="section-desc">
            A top-1% President&apos;s Council district, built by people
            who&apos;ve stayed — decades of combined experience, still doing
            the work.
          </p>
        </Reveal>

        <div className="team-grid">
          {team.map((member) => (
            <TeamCard member={member} key={member.name} />
          ))}
        </div>

        <div className="team-grid team-grid-bottom">
          {financialServicesTeam.map((member) => (
            <TeamCard member={member} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
