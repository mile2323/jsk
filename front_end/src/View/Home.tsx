import React, { useState } from "react";
import { Link } from "react-router-dom";

// Simple Check SVG Icon
const CheckSVG = () => (
  <svg width="20" height="20" fill="currentColor" style={{ marginRight: "8px" }}>
    <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.192 9.207-4.242-4.243a1 1 0 10-1.415 1.415l5 5a1 1 0 001.414 0l10-10.04z" />
  </svg>
);

const Home: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const features = [
    { icon: "📝", title: "Online Enrollment", text: "Register students, employees, or members online in minutes." },
    { icon: "📊", title: "Data Management", text: "Securely store, update, and manage enrollment records." },
    { icon: "📅", title: "Schedule Management", text: "Organize batches, classes, and appointments easily." },
    { icon: "🔒", title: "Secure Access", text: "Role-based login for administrators and users." },
    { icon: "📄", title: "Reports & Analytics", text: "Generate detailed reports and insights instantly." },
  ];

  return (
    <div style={containerStyle}>
      {/* Hero */}
      <section style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>📌 E‑Enrollment Management System</h1>
        <p style={heroTextStyle}>
          A smart, secure, and paperless way to manage registrations and enrollment data.
        </p>
        <div style={{ marginTop: "20px" }}>
          <Link to="/register" style={{ ...buttonStyle, background: "#28a745" }}>
            🚀 Get Started
          </Link>
          {/* <Link to="/contact" style={{ ...buttonStyle, background: "#007bff" }}>
            📞 Contact Us
          </Link> */}
        </div>
      </section>

      {/* Features */}
      <section style={{ ...sectionStyle, background: "#f8f9fa" }}>
        <h2 style={sectionTitleStyle}>✨ Key Features</h2>
        <div style={cardsContainerStyle}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                ...cardStyle,
                ...(hoverIndex === i ? cardHoverStyle : {}),
              }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <h3 style={{ fontSize: "1.5rem" }}>{f.icon} {f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ ...sectionStyle, background: "#e7f5ff" }}>
        <h2 style={sectionTitleStyle}>💡 Why Choose E‑Enrollment?</h2>
        <ul style={benefitsListStyle}>
          <li><CheckSVG /> 100% Paperless Registration</li>
          <li><CheckSVG /> Real-time Data Access</li>
          <li><CheckSVG /> Mobile & Desktop Friendly</li>
          <li><CheckSVG /> Easy Integration with Existing Systems</li>
          <li><CheckSVG /> Secure & Compliant Data Storage</li>
        </ul>
      </section>

      {/* Quick Stats */}
      <section style={{ ...sectionStyle, background: "#d1e7dd" }}>
        <h2 style={sectionTitleStyle}>📊 Quick Stats</h2>
        <div style={statsContainerStyle}>
          <StatBox number="10K+" label="Enrollments Processed" emoji="📄" />
          <StatBox number="500+" label="Institutions Onboarded" emoji="🏫" />
          <StatBox number="99.9%" label="Uptime Guarantee" emoji="⚡" />
          <StatBox number="100%" label="Secure Data" emoji="🔐" />
        </div>
      </section>
    </div>
  );
};

// Stat Box Component
const StatBox = ({ number, label, emoji }: any) => (
  <div style={statBoxStyle}>
    <div style={{ fontSize: "2rem" }}>{emoji}</div>
    <h3 style={{ color: "#000", fontSize: "1.5rem" }}>{number}</h3>
    <p>{label}</p>
  </div>
);

// Styles
const containerStyle: React.CSSProperties = { padding: "20px", fontFamily: "Arial, sans-serif" };
const heroSectionStyle: React.CSSProperties = { textAlign: "center", padding: "50px 20px", background: "#eef9ff", borderRadius: "10px" };
const heroTitleStyle: React.CSSProperties = { fontSize: "2.5rem", marginBottom: "15px" };
const heroTextStyle: React.CSSProperties = { fontSize: "1.2rem", color: "#333", maxWidth: "700px", margin: "0 auto" };
const buttonStyle: React.CSSProperties = { margin: "10px", padding: "10px 20px", color: "white", borderRadius: "5px", textDecoration: "none", fontSize: "1rem" };
const sectionStyle: React.CSSProperties = { padding: "40px 20px", textAlign: "center", borderRadius: "10px", margin: "30px 0" };
const sectionTitleStyle: React.CSSProperties = { fontSize: "1.8rem", marginBottom: "20px" };
const cardsContainerStyle: React.CSSProperties = { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" };
const cardStyle: React.CSSProperties = { background: "white", padding: "20px", borderRadius: "10px", width: "250px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease" };
const cardHoverStyle: React.CSSProperties = { transform: "translateY(-5px)", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" };
const benefitsListStyle: React.CSSProperties = { textAlign: "left", maxWidth: "600px", margin: "auto", fontSize: "1.1rem", lineHeight: "1.8" };
const statsContainerStyle: React.CSSProperties = { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" };
const statBoxStyle: React.CSSProperties = { background: "white", padding: "20px", borderRadius: "10px", width: "180px", textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" };

export default Home;
