import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { Footer, Navigation } from "../../components";
import {
  getAllWriting,
  getWritingBySlug,
} from "../../../lib/writing";

type WritingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllWriting().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: WritingPageProps) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Nanda Kishore Reddy Neelam`,
    description: post.description,
  };
}

export default async function WritingPostPage({
  params,
}: WritingPageProps) {
  const { slug } = await params;

  const post = getWritingBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
  });

  return (
    <main>
      <Navigation />

      <article className="writing-post">
        <header className="writing-post-header">
          <p className="writing-post-category">
            {post.category}
          </p>

          <h1>{post.title}</h1>

          <p className="writing-post-description">
            {post.description}
          </p>

          <div className="writing-post-meta">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            {post.location && (
              <>
                <span>·</span>
                <span>{post.location}</span>
              </>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="writing-post-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </header>

        {post.cover && (
          <div className="writing-post-cover">
            <img
              src={post.cover}
              alt={post.title}
            />
          </div>
        )}

        <div className="writing-post-content">
          {content}
        </div>
      </article>

      <Footer />
    </main>
  );
}