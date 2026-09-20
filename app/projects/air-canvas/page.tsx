import Link from "next/link";
import { Footer, Navigation } from "../../components";

export default function AirCanvasPage() {
  return (
    <main>
      <Navigation />

      <article className="project-detail">
        <header className="project-detail-header">
          <Link className="back-link" href="/projects">
            ← Back to projects
          </Link>

          <p className="project-detail-label">02 · Computer Vision</p>

          <h1>Air Canvas</h1>

          <p className="project-detail-intro">
            A real-time computer-vision application that uses hand
            tracking and motion analysis to allow users to draw digital
            brush strokes using hand movements.
          </p>

          <div className="project-detail-meta">
            <span>Academic / Research Project</span>
            <span>2023</span>
          </div>
        </header>

        <section className="project-detail-section">
          <div className="detail-section-number">01</div>

          <div>
            <h2>Overview</h2>

            <p>
              Air Canvas explores an interaction model where a user can
              control a digital drawing interface without directly
              touching a physical input device.
            </p>

            <p>
              A camera captures the user&apos;s hand, computer-vision
              processing identifies relevant hand landmarks, and the
              application translates the movement into digital strokes.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">02</div>

          <div>
            <h2>Problem</h2>

            <p>
              Traditional drawing interfaces depend on physical input
              devices such as a mouse, stylus, or touchscreen. The project
              investigated whether hand movement captured through a camera
              could be used as an alternative interaction mechanism.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">03</div>

          <div>
            <h2>Approach</h2>

            <p>
              The application uses OpenCV for image and camera processing
              and MediaPipe for hand landmark detection.
            </p>

            <ul className="detail-list">
              <li>Capture live frames from a camera.</li>

              <li>Detect the user&apos;s hand and relevant landmarks.</li>

              <li>
                Track the movement of the selected landmark across frames.
              </li>

              <li>
                Translate the tracked movement into coordinates on the
                drawing canvas.
              </li>

              <li>
                Render continuous movement as digital brush strokes.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">04</div>

          <div>
            <h2>Implementation</h2>

            <div className="workflow">
              <div className="workflow-step">
                <span>01</span>
                <strong>Camera input</strong>
                <p>Capture real-time frames from the camera.</p>
              </div>

              <div className="workflow-step">
                <span>02</span>
                <strong>Hand detection</strong>
                <p>Identify the hand and its landmarks.</p>
              </div>

              <div className="workflow-step">
                <span>03</span>
                <strong>Motion tracking</strong>
                <p>Track landmark movement between frames.</p>
              </div>

              <div className="workflow-step">
                <span>04</span>
                <strong>Stroke generation</strong>
                <p>Convert movement into continuous drawing paths.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">05</div>

          <div>
            <h2>Challenges</h2>

            <p>
              Real-time hand tracking introduces practical challenges
              around camera variation, hand positioning, movement
              stability, and maintaining smooth interaction.
            </p>

            <p>
              The project involved working with hand landmarks and motion
              information while accounting for variations in the camera
              input.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">06</div>

          <div>
            <h2>Technology</h2>

            <div className="technology-grid">
              <div>
                <span>Language</span>
                <strong>Python</strong>
              </div>

              <div>
                <span>Computer vision</span>
                <strong>OpenCV</strong>
              </div>

              <div>
                <span>Hand tracking</span>
                <strong>MediaPipe</strong>
              </div>

              <div>
                <span>Processing</span>
                <strong>Real-time video</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">07</div>

          <div>
            <h2>Publication</h2>

            <p>
              The Air Canvas project was developed as part of my academic
              work and was published as:
            </p>

            <div className="publication-card">
              <span>2023</span>

              <div>
                <strong>
                  Air Canvas: Hand Tracking Using OpenCV and MediaPipe
                </strong>

                <p>SSRN</p>

                <a
                  href="https://papers.ssrn.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View publication →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">08</div>

          <div>
            <h2>Takeaways</h2>

            <p>
              The project gave me practical experience with computer vision,
              real-time processing, hand landmark detection, and translating
              visual information into an interactive software experience.
            </p>
          </div>
        </section>

        <div className="project-detail-footer">
          <Link className="back-link" href="/projects">
            ← Back to all projects
          </Link>

          <div className="project-footer-links">
            <a
              href="https://github.com/NanduN2003/Air-canvas"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <Link
              className="next-project-link"
              href="/projects/developer-automation"
            >
              Next project →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}