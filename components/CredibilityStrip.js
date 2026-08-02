export default function CredibilityStrip() {
  const stats = [
    { num: "Top 10%", label: "District nationwide" },
    { num: "~100 yrs", label: "Farmers brand heritage" },
    { num: "50 states", label: "Product availability" },
    { num: "A-Excellent", label: "AM Best rating" },
  ];
  return (
    <div className="strip">
      <div className="container">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
