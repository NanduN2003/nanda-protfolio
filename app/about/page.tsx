import Link from "next/link";
import { Footer, Navigation } from "../components";

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <section className="page-content about-page">
        <p className="page-label">About</p>

        <h1>A little about me.</h1>

        <p className="page-description">
          I&apos;m a Software Engineer working on enterprise airline
          technology, with a background spanning C++ development, quality
          engineering, automation, and applied AI.
        </p>

        <section className="about-section">
          <div className="about-section-label">
            <span>01</span>
            <p>Who I am</p>
          </div>

          <div className="about-section-content">
            <p>
              I currently work at{" "}
              <a
                href="https://amadeus.com"
                target="_blank"
                rel="noreferrer"
              >
                Amadeus
              </a>{" "}
              in Travel Distribution, where I work on enterprise airline
              technology and C++ product development.
            </p>

            <p>
              My work involves understanding product requirements and
              business rules, working through complex processing behaviour,
              debugging large systems, investigating root causes, and
              turning those findings into dependable product improvements.
            </p>

            <p>
              Before moving into software engineering, I worked in quality
              engineering and automation. That experience gave me a strong
              appreciation for testing, observability, edge cases, and
              understanding how software behaves beyond the happy path.
            </p>

            <p>
              Outside my day-to-day work, I enjoy building practical
              projects around developer tooling, automation, computer
              vision, and generative AI.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-label">
            <span>02</span>
            <p>Engineering interests</p>
          </div>

          <div className="interest-grid">
            <article className="interest-item">
              <span>01</span>

              <h2>C++ &amp; Systems</h2>

              <p>
                Product development, debugging, memory and performance
                considerations, and working with complex existing codebases.
              </p>
            </article>

            <article className="interest-item">
              <span>02</span>

              <h2>Backend Engineering</h2>

              <p>
                APIs, application architecture, distributed workflows, data
                processing, and building reliable software components.
              </p>
            </article>

            <article className="interest-item">
              <span>03</span>

              <h2>Automation</h2>

              <p>
                Turning repetitive engineering processes into reusable
                workflows through scripting, CI/CD, and infrastructure
                automation.
              </p>
            </article>

            <article className="interest-item">
              <span>04</span>

              <h2>Applied AI</h2>

              <p>
                Exploring practical uses of GenAI, agentic workflows,
                computer vision, and AI-assisted software development.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-label">
            <span>03</span>
            <p>Education</p>
          </div>

          <div className="about-row">
            <div className="about-row-main">
              <h2>B.Tech — Computer Science &amp; Engineering</h2>

              <p>Jain (Deemed-to-be University)</p>

              <p className="about-muted">
                Specialized in Data Science.
              </p>
            </div>

            <span className="about-year">2024</span>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-label">
            <span>04</span>
            <p>Publication</p>
          </div>

          <div className="publication">
            <span className="publication-year">2023</span>

            <div>
              <h2>
                Air Canvas: Hand Tracking Using OpenCV and MediaPipe
              </h2>

              <p>
                Research work exploring real-time hand tracking and motion
                analysis using computer vision.
              </p>

              <a
                href="https://papers.ssrn.com/"
                target="_blank"
                rel="noreferrer"
              >
                View on SSRN →
              </a>
            </div>
          </div>
        </section>

        <section className="about-section about-connect">
          <div className="about-section-label">
            <span>05</span>
            <p>Connect</p>
          </div>

          <div className="about-connect-content">
            <h2>Let&apos;s connect.</h2>

            <p>
              I&apos;m always interested in interesting engineering
              problems, software systems, developer tooling, and practical
              applications of AI.
            </p>

            <div className="about-links">
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

              <a href="mailto:kishoreneelam27@gmail.com">
                kishoreneelam27@gmail.com
              </a>
            </div>
          </div>
        </section>

        <div className="about-bottom-links">
          <Link href="/projects">View projects →</Link>

          <Link href="/experience">View experience →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}