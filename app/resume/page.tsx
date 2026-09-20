import Link from "next/link";
import { Footer, Navigation } from "../components";

export default function ResumePage() {
  return (
    <main>
      <Navigation />

      <section className="page-content resume-page">
        <header className="resume-header">
          <div>
            <p className="page-label">Resume</p>

            <h1>Nanda Kishore Reddy Neelam</h1>

            <p className="resume-role">
              Software Engineer · C++ · Python · Automation
            </p>
          </div>

          <div className="resume-actions">
            <a
              className="primary-button"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View / Download Resume ↗
            </a>

            <a
              className="secondary-button"
              href="https://www.linkedin.com/in/nanda-kishore-reddy-neelam-683082206/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              className="secondary-button"
              href="https://github.com/NanduN2003"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </header>

        {/* Profile */}

        <section className="resume-section">
          <div className="resume-section-label">
            <span>01</span>
            <p>Profile</p>
          </div>

          <div className="resume-section-content">
            <p>
              Software Engineer with professional experience in enterprise
              airline and travel technology, currently focused on C++
              product development. Experienced across software development,
              quality engineering, automation, debugging, root-cause
              analysis, testing, and performance analysis.
            </p>

            <p>
              I work on translating business and industry requirements into
              dependable software improvements while collaborating across
              engineering, product, and domain teams.
            </p>
          </div>
        </section>

        {/* Experience */}

        <section className="resume-section">
          <div className="resume-section-label">
            <span>02</span>
            <p>Experience</p>
          </div>

          <div className="resume-section-content resume-experience">
            <article className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h2>Software Engineer</h2>
                  <p>Amadeus Labs · Bengaluru</p>
                </div>

                <span>Jun 2026 — Present</span>
              </div>

              <ul>
                <li>
                  Develop and maintain C++ components for enterprise airline
                  ticket servicing within Travel Distribution.
                </li>

                <li>
                  Work across ticket reissue, refund, fare-rule processing,
                  and industry-led product changes.
                </li>

                <li>
                  Translate business and industry requirements into product
                  enhancements, fixes, and validation scenarios.
                </li>

                <li>
                  Perform code-level debugging and root-cause analysis by
                  correlating system behaviour, traces, business rules, and
                  processing logic.
                </li>

                <li>
                  Contribute unit and regression tests, code reviews, and
                  technical discussions.
                </li>

                <li>
                  Use AI-assisted development tools including GitHub
                  Copilot, Claude Code, and Kiro as part of the engineering
                  workflow.
                </li>
              </ul>
            </article>

            <article className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h2>Quality Assurance Engineer</h2>
                  <p>Amadeus Labs · Bengaluru</p>
                </div>

                <span>Jul 2024 — Jun 2026</span>
              </div>

              <ul>
                <li>
                  Worked across airline pricing, taxes, ticketing, reissue,
                  refunds, and informative-pricing scenarios.
                </li>

                <li>
                  Investigated defects and product issues through technical
                  analysis and root-cause investigation.
                </li>

                <li>
                  Designed functional and regression coverage for complex
                  airline business rules.
                </li>

                <li>
                  Performed performance validation and transaction-level
                  execution analysis.
                </li>

                <li>
                  Built a reusable Python utility for comparing execution
                  statistics and simplifying recurring analysis.
                </li>

                <li>
                  Built a Power BI dashboard using Excel, Power Query, data
                  modelling, and DAX for budget and spend analysis.
                </li>
              </ul>
            </article>

            <article className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h2>Software Developer Intern</h2>
                  <p>Amadeus Labs · Bengaluru</p>
                </div>

                <span>Feb 2024 — Jul 2024</span>
              </div>

              <ul>
                <li>
                  Built a proof of concept for automating application
                  technology-stack upgrades.
                </li>

                <li>
                  Developed reusable Ansible and AWX workflows for
                  configuration discovery and version updates.
                </li>

                <li>
                  Integrated artifact-management and source-control
                  operations into the automation workflow.
                </li>

                <li>
                  Worked with Jenkins, Groovy, REST APIs, Git, and CI
                  workflows.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Technical Skills */}

        <section className="resume-section">
          <div className="resume-section-label">
            <span>03</span>
            <p>Technical skills</p>
          </div>

          <div className="resume-section-content resume-skills">
            <div className="resume-skill-group">
              <span>Languages</span>

              <p>C++ · Python · SQL</p>
            </div>

            <div className="resume-skill-group">
              <span>Software Engineering</span>

              <p>
                OOP · DSA · Debugging · RCA · Unit Testing · Regression
                Testing · Code Reviews · SDLC
              </p>
            </div>

            <div className="resume-skill-group">
              <span>Development &amp; DevOps</span>

              <p>
                Git · Jenkins · Ansible · Docker · Kubernetes · CI/CD · REST
                APIs
              </p>
            </div>

            <div className="resume-skill-group">
              <span>AI-assisted Development</span>

              <p>GitHub Copilot · Claude Code · Kiro</p>
            </div>

            <div className="resume-skill-group">
              <span>Cloud &amp; Platforms</span>

              <p>Cloud Platforms · Linux · WSL</p>
            </div>

            <div className="resume-skill-group">
              <span>Data &amp; Analytics</span>

              <p>Power BI · DAX · Excel · Power Query</p>
            </div>

            <div className="resume-skill-group">
              <span>Domain</span>

              <p>
                Airline Technology · Travel Distribution · Ticket Servicing
                · Pricing &amp; Fare Rules
              </p>
            </div>
          </div>
        </section>

        {/* Selected Work */}

        <section className="resume-section">
          <div className="resume-section-label">
            <span>04</span>
            <p>Selected work</p>
          </div>

          <div className="resume-section-content resume-projects">
            <Link
              className="resume-project"
              href="/projects/travel-assistant-ai"
            >
              <div>
                <h2>Travel Assistant AI</h2>

                <p>
                  Multi-agent travel assistant using Python, FastAPI,
                  LangChain, GenAI, OCR, and structured travel workflows.
                </p>
              </div>

              <span>2025 ↗</span>
            </Link>

            <Link
              className="resume-project"
              href="/projects/air-canvas"
            >
              <div>
                <h2>Air Canvas</h2>

                <p>
                  Real-time computer-vision project using Python, OpenCV,
                  and MediaPipe for hand-tracking-based interaction.
                </p>
              </div>

              <span>2023 ↗</span>
            </Link>

            <Link
              className="resume-project"
              href="/projects/developer-automation"
            >
              <div>
                <h2>Developer Automation</h2>

                <p>
                  Automation proof of concept using Ansible, AWX, Jenkins,
                  Git, Artifactory, Groovy, and REST APIs.
                </p>
              </div>

              <span>2024 ↗</span>
            </Link>
          </div>
        </section>

        {/* Education */}

        <section className="resume-section">
          <div className="resume-section-label">
            <span>05</span>
            <p>Education</p>
          </div>

          <div className="resume-section-content">
            <div className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <h2>B.Tech — Computer Science &amp; Engineering</h2>
                  <p>Jain (Deemed-to-be University)</p>
                </div>

                <span>2024</span>
              </div>

              <p className="resume-muted">
                Specialized in Data Science · CGPA 8.7/10
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}

        <section className="resume-section">
          <div className="resume-section-label">
            <span>06</span>
            <p>Certifications</p>
          </div>

          <div className="resume-section-content resume-certifications">
            <div>
              <span>Google</span>
              <p>Google Data Analytics Professional Certificate</p>
            </div>

            <div>
              <span>DataCamp</span>
              <p>Data Analyst with Python</p>
            </div>

            <div>
              <span>NPTEL</span>
              <p>Data Analytics with Python</p>
            </div>
          </div>
        </section>

        {/* Contact */}

        <section className="resume-section resume-contact">
          <div className="resume-section-label">
            <span>07</span>
            <p>Contact</p>
          </div>

          <div className="resume-section-content">
            <h2>Let&apos;s connect.</h2>

            <p>
              For engineering opportunities, collaboration, or interesting
              technical conversations.
            </p>

            <div className="resume-contact-links">
              <a href="mailto:kishoreneelam27@gmail.com">
                kishoreneelam27@gmail.com
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
          </div>
        </section>

        <div className="resume-bottom-links">
          <Link href="/experience">← Experience</Link>

          <Link href="/projects">Projects →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}