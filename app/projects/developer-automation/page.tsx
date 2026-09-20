import Link from "next/link";
import { Footer, Navigation } from "../../components";

export default function DeveloperAutomationPage() {
  return (
    <main>
      <Navigation />

      <article className="project-detail">
        <header className="project-detail-header">
          <Link className="back-link" href="/projects">
            ← Back to projects
          </Link>

          <p className="project-detail-label">03 · Developer Tooling</p>

          <h1>Developer Automation</h1>

          <p className="project-detail-intro">
            A proof of concept for automating application technology-stack
            upgrades and reducing repetitive engineering work across
            configuration, artifact, version-control, and CI workflows.
          </p>

          <div className="project-detail-meta">
            <span>Professional Engineering Project</span>
            <span>2024</span>
          </div>
        </header>

        <section className="project-detail-section">
          <div className="detail-section-number">01</div>

          <div>
            <h2>Overview</h2>

            <p>
              Application technology-stack upgrades can involve several
              repetitive steps, including identifying configuration files,
              determining current versions, updating values, handling
              artifacts, and committing changes to source control.
            </p>

            <p>
              I worked on a proof of concept that explored how these steps
              could be connected into a reusable automation workflow.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">02</div>

          <div>
            <h2>Problem</h2>

            <p>
              Technology upgrades can require engineers to repeatedly
              perform similar operations across applications. Manual
              execution makes the process time-consuming and introduces
              opportunities for inconsistent configuration changes.
            </p>

            <p>
              The objective was to move repetitive operations into an
              automated workflow while keeping the process traceable and
              reusable.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">03</div>

          <div>
            <h2>Approach</h2>

            <p>
              The proof of concept connected automation tooling with source
              control, artifact management, and CI infrastructure.
            </p>

            <ul className="detail-list">
              <li>
                Locate relevant application configuration and determine
                existing technology versions.
              </li>

              <li>
                Process required artifact or repository information.
              </li>

              <li>
                Apply version changes through reusable automation tasks.
              </li>

              <li>
                Integrate source-control operations into the workflow.
              </li>

              <li>
                Trigger the workflow through CI-oriented automation.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">04</div>

          <div>
            <h2>Workflow</h2>

            <div className="workflow">
              <div className="workflow-step">
                <span>01</span>
                <strong>Discover</strong>
                <p>Locate configuration and identify relevant versions.</p>
              </div>

              <div className="workflow-step">
                <span>02</span>
                <strong>Process</strong>
                <p>Prepare the required upgrade information and artifacts.</p>
              </div>

              <div className="workflow-step">
                <span>03</span>
                <strong>Update</strong>
                <p>Apply the required technology-stack changes.</p>
              </div>

              <div className="workflow-step">
                <span>04</span>
                <strong>Validate</strong>
                <p>Use the automation and CI workflow to validate execution.</p>
              </div>

              <div className="workflow-step">
                <span>05</span>
                <strong>Commit</strong>
                <p>Integrate source-control operations into the process.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">05</div>

          <div>
            <h2>Architecture</h2>

            <p>
              The workflow was designed around reusable automation tasks
              rather than a single application-specific script. This made
              the approach easier to extend as additional upgrade
              scenarios were identified.
            </p>

            <div className="architecture-flow">
              <span>CI trigger</span>
              <b>→</b>
              <span>Automation workflow</span>
              <b>→</b>
              <span>Configuration</span>
              <b>→</b>
              <span>Artifact handling</span>
              <b>→</b>
              <span>Source control</span>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">06</div>

          <div>
            <h2>Technology</h2>

            <div className="technology-grid">
              <div>
                <span>Automation</span>
                <strong>Ansible</strong>
              </div>

              <div>
                <span>Automation platform</span>
                <strong>AWX</strong>
              </div>

              <div>
                <span>CI/CD</span>
                <strong>Jenkins</strong>
              </div>

              <div>
                <span>Scripting</span>
                <strong>Groovy</strong>
              </div>

              <div>
                <span>Source control</span>
                <strong>Git</strong>
              </div>

              <div>
                <span>Artifact management</span>
                <strong>Artifactory</strong>
              </div>

              <div>
                <span>Integration</span>
                <strong>REST APIs</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">07</div>

          <div>
            <h2>My contribution</h2>

            <p>
              I worked on the proof-of-concept workflow, including
              automation tasks for configuration discovery, version
              processing, artifact-related operations, source-control
              changes, and integration with the surrounding CI workflow.
            </p>

            <p>
              The work gave me practical exposure to infrastructure
              automation and helped me understand how repetitive developer
              operations can be converted into reusable workflows.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">08</div>

          <div>
            <h2>Learning</h2>

            <p>
              The project strengthened my understanding of automation
              design, CI/CD integration, source-control workflows, and the
              importance of making engineering processes repeatable and
              maintainable.
            </p>
          </div>
        </section>

        <div className="project-detail-footer">
          <Link className="back-link" href="/projects">
            ← Back to all projects
          </Link>

          <Link
            className="next-project-link"
            href="/projects/travel-assistant-ai"
          >
            Back to first project →
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}