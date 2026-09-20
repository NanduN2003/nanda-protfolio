import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writingDirectory = path.join(
  process.cwd(),
  "content",
  "writing"
);

export type WritingFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags?: string[];
  location?: string;
  cover?: string;
  published?: boolean;
};

export type WritingPost = WritingFrontmatter & {
  slug: string;
  content: string;
};

function getWritingFiles() {
  if (!fs.existsSync(writingDirectory)) {
    return [];
  }

  return fs
    .readdirSync(writingDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

export function getAllWriting(): WritingPost[] {
  const files = getWritingFiles();

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");

    const fullPath = path.join(writingDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      category: data.category ?? "Other",
      tags: Array.isArray(data.tags) ? data.tags : [],
      location: data.location ?? "",
      cover: data.cover ?? "",
      published: data.published !== false,
      content,
    };
  });

  return posts
    .filter((post) => post.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

export function getWritingBySlug(
  slug: string
): WritingPost | undefined {
  const posts = getAllWriting();

  return posts.find((post) => post.slug === slug);
}