import Link from "next/link";
import { Footer, Navigation } from "../components";

const roles = [
  {
    number: "01",
    role: "Software Engineer",
    company: "Amadeus Labs · Bengaluru",
    period: "Jun 2026 — Present",
    description:
      "Working within Travel Distribution on enterprise airline technology and C++ product development. I develop and maintain ticket servicing components, translate business and industry requirements into product improvements, investigate root causes, and contribute tests and code reviews.",
    highlights: [
      "C++ product development and maintenance",
      "Airline ticket servicing, reissue, refund, and fare-rule workflows",
      "Code-level debugging and root-cause analysis",
      "Unit and regression testing",
      "Code reviews and technical discussions",
      "AI-assisted development with GitHub Copilot, Claude Code, and Kiro",
    ],
    skills: ["C++", "Debugging", "RCA", "Unit Testing", "Git", "Docker", "Kubernetes"],
  },
  {
    number: "02",
    role: "Quality Assurance Engineer",
    company: "Amadeus Labs · Bengaluru",
    period: "Jul 2024 — Jun 2026",
    description:
      "Worked on quality engineering across airline pricing, taxes, ticketing, reissue, refunds, and performance validation. I investigated defects, designed regression coverage, and built Python and Power BI tooling to improve recurring analysis and engineering workflows.",
    highlights: [
      "Airline pricing, taxes, ticketing, reissue, and refund validation",
      "Technical investigation and root-cause analysis",
      "Functional and regression testing",
      "Performance validation and transaction-level analysis",
      "Reusable Python utility for execution-statistics comparison",
      "Power BI dashboard using Excel, Power Query, data modelling, and DAX",
    ],
    skills: [
      "Python",
      "Testing",
      "RCA",
      "Performance Analysis",
      "Power BI",
      "DAX",
      "Agile",
    ],
  },
  {
    number: "03",
    role: "Software Developer Intern",
    company: "Amadeus Labs · Bengaluru",
    period: "Feb 2024 — Jul 2024",
    description:
      "Built a proof of concept for automating application technology-stack upgrades. The workflow connected automation, artifact management, configuration discovery, source control, and CI tooling into a reusable process.",
    highlights: [
      "Automation workflows for technology-stack upgrades",
      "Configuration and version discovery",
      "Artifact-related workflow automation",
      "Git and source-control integration",
      "Jenkins and Groovy integration",
      "REST API-based workflow integration",
    ],
    skills: ["Ansible", "AWX", "Jenkins", "Groovy", "Git", "REST APIs", "Artifactory"],
  },
];

export default function ExperiencePage() {
  return (
    <main>
      <Navigation />

      <section className="page-content experience-page">
        <p className="page-label">Career</p>

        <h1>Experience</h1>

        <p className="page-description">
          My journey across software development, quality engineering,
          automation, and enterprise airline technology.
        </p>

        <div className="experience-list">
          {roles.map((item) => (
            <article className="experience-card" key={item.role}>
              <div className="experience-card-top">
                <span className="experience-number">{item.number}</span>

                <time>{item.period}</time>
              </div>

              <div className="experience-card-content">
                <div className="experience-title">
                  <h2>{item.role}</h2>

                  <p>{item.company}</p>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <div className="experience-highlights">
                  <p className="experience-subtitle">What I worked on</p>

                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tags">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="career-progression">
          <div>
            <p className="section-label">Career progression</p>

            <h2>
              From automation and quality engineering to C++ product
              development.
            </h2>
          </div>

          <div className="progression-track">
            <div className="progression-step">
              <span>01</span>
              <strong>Developer Intern</strong>
              <small>2024</small>
            </div>

            <div className="progression-line" />

            <div className="progression-step">
              <span>02</span>
              <strong>QA Engineer</strong>
              <small>2024 — 2026</small>
            </div>

            <div className="progression-line" />

            <div className="progression-step">
              <span>03</span>
              <strong>Software Engineer</strong>
              <small>2026 — Present</small>
            </div>
          </div>
        </section>

        <section className="experience-cta">
          <p className="section-label">Continue exploring</p>

          <h2>
            Interested in the engineering work behind these experiences?
          </h2>

          <div className="experience-cta-links">
            <Link href="/projects">View selected projects →</Link>

            <Link href="/about">More about me →</Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}