import Link from "next/link";
import { Footer, Navigation } from "../../components";

export default function TravelAssistantAIPage() {
  return (
    <main>
      <Navigation />

      <article className="project-detail">
        <header className="project-detail-header">
          <Link className="back-link" href="/projects">
            ← Back to projects
          </Link>

          <p className="project-detail-label">01 · Applied AI</p>

          <h1>Travel Assistant AI</h1>

          <p className="project-detail-intro">
            A multi-agent travel assistant designed to transform
            unstructured travel requests into structured information that
            can be consumed by downstream travel workflows.
          </p>

          <div className="project-detail-meta">
            <span>Company AI Hackathon</span>
            <span>2025</span>
          </div>
        </header>

        <section className="project-detail-section">
          <div className="detail-section-number">01</div>

          <div>
            <h2>Overview</h2>

            <p>
              The project explored how an AI-based workflow could help
              automate parts of a travel agency process. Travel requests
              can arrive through emails, screenshots, images, or other
              unstructured formats, making it difficult to directly pass
              them into structured travel systems.
            </p>

            <p>
              The goal was to build a workflow that could understand the
              request, extract relevant information, enrich it, and produce
              structured travel data.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">02</div>

          <div>
            <h2>Problem</h2>

            <p>
              A travel agent may receive information such as passenger
              details, destinations, dates, and travel preferences in
              different formats. Manually reading and converting these
              requests into structured information introduces repetitive
              work.
            </p>

            <p>
              The project focused on using AI to bridge the gap between
              unstructured user input and structured travel workflows.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">03</div>

          <div>
            <h2>Approach</h2>

            <p>
              The solution was designed as a multi-agent workflow where
              different components handled specific parts of the
              processing pipeline.
            </p>

            <ul className="detail-list">
              <li>
                OCR processing extracts information from screenshots and
                images.
              </li>

              <li>
                Natural-language processing identifies and refines
                important entities.
              </li>

              <li>
                A generative AI component interprets the overall intent of
                the request.
              </li>

              <li>
                Travel-related information can then be enriched and
                transformed into structured output.
              </li>

              <li>
                The workflow exposes processing status through an API-based
                interface.
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
                <strong>Input</strong>
                <p>Email, image, or screenshot containing travel intent.</p>
              </div>

              <div className="workflow-step">
                <span>02</span>
                <strong>Extraction</strong>
                <p>OCR and language processing extract useful information.</p>
              </div>

              <div className="workflow-step">
                <span>03</span>
                <strong>Reasoning</strong>
                <p>GenAI interprets intent and coordinates the workflow.</p>
              </div>

              <div className="workflow-step">
                <span>04</span>
                <strong>Enrichment</strong>
                <p>Extracted information is refined and structured.</p>
              </div>

              <div className="workflow-step">
                <span>05</span>
                <strong>Output</strong>
                <p>Structured travel information is produced for downstream use.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">05</div>

          <div>
            <h2>Technology</h2>

            <div className="technology-grid">
              <div>
                <span>Language</span>
                <strong>Python</strong>
              </div>

              <div>
                <span>API</span>
                <strong>FastAPI</strong>
              </div>

              <div>
                <span>AI orchestration</span>
                <strong>LangChain</strong>
              </div>

              <div>
                <span>Generative AI</span>
                <strong>Google GenAI / Vertex AI</strong>
              </div>

              <div>
                <span>Vision</span>
                <strong>OCR / Vision API</strong>
              </div>

              <div>
                <span>Frontend</span>
                <strong>HTML / CSS / JavaScript</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">06</div>

          <div>
            <h2>My contribution</h2>

            <p>
              I worked on the Python-based AI workflow and the overall
              orchestration of the processing pipeline. This included
              working with OCR, intent extraction, structured data
              processing, API integration, and asynchronous workflow
              handling.
            </p>

            <p>
              The project gave me practical experience in combining
              generative AI with traditional software components rather
              than treating an LLM as an isolated feature.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <div className="detail-section-number">07</div>

          <div>
            <h2>Takeaways</h2>

            <p>
              The project strengthened my understanding of agentic AI
              workflows, API design, asynchronous processing, and the
              engineering challenges involved in turning unstructured
              information into reliable structured data.
            </p>
          </div>
        </section>

        <div className="project-detail-footer">
          <Link className="back-link" href="/projects">
            ← Back to all projects
          </Link>

          <Link className="next-project-link" href="/projects/air-canvas">
            Next project →
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}