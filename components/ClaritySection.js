import Reveal from "./Reveal";

const pillars = [
  {
    num: "01",
    title: "Plain & Simple",
    body: "We break down what agency ownership actually involves — capital, timeline, support — before you ever apply.",
  },
  {
    num: "02",
    title: "Nothing to Hide",
    body: "The good, the bad, and the ugly of the path ahead — you'll know exactly what you're signing up for.",
  },
  {
    num: "03",
    title: "One Step Ahead",
    body: "A district team that's already thought through what you'll need — before you know to ask for it.",
  },
];

export default function ClaritySection() {
  return (
    <section className="clarity-section" id="clarity">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow" style={{ color: "var(--pink)" }}>
            Why Farmers, Why Now
          </span>
          <h2 className="section-title" style={{ color: "white" }}>
            Clarity, in an industry that rarely offers it.
          </h2>
          <p className="section-desc">
            Farmers&apos; brand is built on one idea: insurance shouldn&apos;t
            feel complicated. That same clarity extends to how we support the
            people who build their careers with us.
          </p>
        </Reveal>
        <div className="pillars">
          {pillars.map((p) => (
            <Reveal className="pillar" key={p.num}>
              <div className="pillar-num">{p.num}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
