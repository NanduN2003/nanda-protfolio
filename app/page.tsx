import Link from "next/link";
import { Footer, Navigation } from "./components";

const selectedWork = [
  {
    number: "01",
    title: "Travel Assistant AI",
    description:
      "A multi-agent travel assistant that transforms unstructured travel requests into structured travel information using OCR, NLP, GenAI, and travel APIs.",
    href: "/projects/travel-assistant-ai",
  },
  {
    number: "02",
    title: "Air Canvas",
    description:
      "A real-time computer-vision project that uses hand tracking and motion analysis to translate hand movements into digital drawing interactions.",
    href: "/projects/air-canvas",
  },
  {
    number: "03",
    title: "Developer Automation",
    description:
      "An automation proof of concept for application technology-stack upgrades, connecting configuration discovery, artifact handling, version changes, Git, and CI workflows.",
    href: "/projects/developer-automation",
  },
];

const technicalFocus = [
  {
    number: "01",
    title: "C++ & Systems",
    description:
      "C++ development, debugging, maintenance, testing, and reasoning about complex application behaviour.",
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "Building dependable application workflows and working with APIs, services, data processing, and integration logic.",
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Python, Ansible, Jenkins, CI/CD, and reusable tooling that reduces repetitive engineering work.",
  },
  {
    number: "04",
    title: "Applied AI",
    description:
      "Practical experimentation with GenAI, LangChain, OCR, computer vision, and AI-assisted development.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="home-intro">
        <p className="eyebrow">Software Engineer · Bengaluru</p>

        <h1>
          Nanda Kishore
          <br />
          Reddy Neelam
        </h1>

        <p className="home-headline">
          C++ · Backend · Automation · Applied AI
        </p>

        <div className="copy">
          <p>
            Software Engineer at{" "}
            <a
              href="https://www.amadeus.com/"
              target="_blank"
              rel="noreferrer"
            >
              Amadeus
            </a>
            , working on enterprise airline technology and C++ product
            development.
          </p>

          <p>
            I build and maintain software for complex ticket-servicing
            workflows, with experience across development, automation,
            debugging, testing, performance analysis, and applied AI.
          </p>

          <p>
            My background spans software development, quality engineering, and
            automation, giving me a broad perspective on how software is built,
            tested, investigated, and improved.
          </p>

          <div className="home-actions">
            <Link className="home-primary-link" href="/projects">
              View selected work →
            </Link>

            <Link className="home-secondary-link" href="/experience">
              View experience →
            </Link>

            <a
              className="home-secondary-link"
              href="https://github.com/NanduN2003"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="home-section">
        <div className="section-heading">
          <p className="section-label">Currently</p>

          <h2>Software Engineer @ Amadeus</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-period">
              Jun 2026 — Present
            </div>

            <div className="timeline-content">
              <h3>Travel Distribution · Bengaluru</h3>

              <p className="timeline-company">
                C++ product development · Ticket servicing · Airline
                technology
              </p>

              <p>
                Working on enterprise airline technology within Travel
                Distribution, focusing on C++ development, feature delivery,
                maintenance, debugging, root-cause analysis, testing, and
                industry-driven changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="home-section">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>

          <h2>Projects built around practical engineering problems.</h2>
        </div>

        <div className="featured-projects">
          {selectedWork.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className="featured-project"
            >
              <div>
                <span className="project-index">{project.number}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <span className="project-arrow">↗</span>
            </Link>
          ))}
        </div>

        <div className="home-actions">
          <Link className="home-primary-link" href="/projects">
            View all projects →
          </Link>
        </div>
      </section>

      {/* Technical Focus */}
      <section className="home-section" id="skills">
        <div className="section-heading">
          <p className="section-label">Technical Focus</p>

          <h2>
            Areas I enjoy working across.
          </h2>
        </div>

        <div className="focus-grid">
          {technicalFocus.map((item) => (
            <div className="focus-item" key={item.number}>
              <span className="focus-number">{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <p className="section-label">Get in touch</p>

        <h2>Interested in thoughtful engineering work?</h2>

        <p>
          I&apos;m always open to discussing software engineering, backend
          development, automation, applied AI, and interesting technical
          problems.
        </p>

        <div className="contact-links">
          <a
            href="mailto:kishoreneelam27@gmail.com"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/nanda-kishore-reddy-neelam-683082206/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/NanduN2003"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}