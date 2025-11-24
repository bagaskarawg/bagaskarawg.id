import matter from "gray-matter";
import { fetchGitHubContent, fetchRawContent } from "./github";

export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    coverImage?: string;
}

export async function getAllPosts(): Promise<Post[]> {
    const files = await fetchGitHubContent("content/posts");

    const posts = await Promise.all(
        files
            .filter((file: any) => file.name.endsWith(".md"))
            .map(async (file: any) => {
                const content = await fetchRawContent(file.download_url);
                const { data, content: markdown } = matter(content);

                return {
                    slug: file.name.replace(".md", ""),
                    title: data.title,
                    date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date,
                    excerpt: data.excerpt,
                    content: markdown,
                };
            })
    );

    return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const posts = await getAllPosts();
    return posts.find((p) => p.slug === slug) || null;
}
