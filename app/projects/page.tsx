import Link from "next/link";
import { Footer, Navigation } from "../components";

const projects = [
  {
    number: "01",
    title: "Travel Assistant AI",
    description:
      "A multi-agent travel assistant that transforms unstructured travel requests into structured travel data using OCR, NLP, GenAI, and travel APIs.",
    year: "2025",
    slug: "travel-assistant-ai",
    tags: ["Python", "FastAPI", "LangChain", "GenAI"],
  },
  {
    number: "02",
    title: "Air Canvas",
    description:
      "A real-time computer-vision project that uses hand tracking and motion analysis to turn hand movements into digital brush strokes.",
    year: "2023",
    slug: "air-canvas",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
  },
  {
    number: "03",
    title: "Developer Automation",
    description:
      "An automation proof of concept for application technology-stack upgrades using configuration discovery, artifact handling, version changes, and source control workflows.",
    year: "2024",
    slug: "developer-automation",
    tags: ["Ansible", "AWX", "Jenkins", "Git"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Navigation />

      <section className="page-content projects-page">
        <p className="page-label">Selected work</p>

        <h1>Projects</h1>

        <p className="page-description">
          A selection of projects spanning applied AI, computer vision,
          developer automation, and practical software engineering.
        </p>

        <div className="project-list">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-list-item"
            >
              <div className="project-list-main">
                <span className="project-list-number">
                  {project.number}
                </span>

                <div>
                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-list-meta">
                <time>{project.year}</time>
                <span className="project-list-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}