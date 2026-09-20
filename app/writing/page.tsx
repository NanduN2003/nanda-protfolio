import Link from "next/link";
import { Footer, Navigation } from "../components";
import { getAllWriting } from "../../lib/writing";

const categories = [
  "All",
  "Engineering",
  "Travel",
  "Life & Experiences",
  "Ideas",
];

export default function WritingPage() {
  const writings = getAllWriting();

  return (
    <main>
      <Navigation />

      <section className="page-content writing-page">
        <p className="page-label">Writing</p>

        <h1>Thoughts, stories & things I&apos;ve learned.</h1>

        <p className="page-description">
          A collection of engineering notes, travel stories, personal
          experiences, ideas, and things I find interesting along the way.
        </p>

        <div className="writing-categories">
          {categories.map((category) => (
            <span key={category} className="writing-category">
              {category}
            </span>
          ))}
        </div>

        <div className="writing-list">
          {writings.map((post, index) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="writing-item"
            >
              <div className="writing-item-main">
                <span className="writing-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="writing-item-category">
                    {post.category}
                  </p>

                  <h2>{post.title}</h2>

                  <p>{post.description}</p>
                </div>
              </div>

              <div className="writing-item-meta">
                <time dateTime={post.date}>
                  {new Date(post.date).getFullYear()}
                </time>

                <span className="writing-item-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>

        {writings.length === 0 && (
          <div className="writing-empty">
            <p>No published writing yet.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}