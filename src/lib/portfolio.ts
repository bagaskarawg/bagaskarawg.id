import matter from "gray-matter";
import { fetchGitHubContent, fetchRawContent } from "./github";

export interface Project {
    slug: string;
    title: string;
    description: string;
    content: string;
    coverImage?: string;
    technologies: string[];
    demoUrl?: string;
    repoUrl?: string;
    screenshots?: string[];
}

export async function getAllProjects(): Promise<Project[]> {
    const files = await fetchGitHubContent("content/projects");

    const projects = await Promise.all(
        files
            .filter((file: any) => file.name.endsWith(".md"))
            .map(async (file: any) => {
                const content = await fetchRawContent(file.download_url);
                const { data, content: markdown } = matter(content);

                return {
                    slug: file.name.replace(".md", ""),
                    title: data.title,
                    description: data.description,
                    content: markdown,
                    technologies: data.technologies || [],
                    demoUrl: data.demoUrl,
                    repoUrl: data.repoUrl,
                    screenshots: data.screenshots || [],
                };
            })
    );

    return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const projects = await getAllProjects();
    return projects.find((p) => p.slug === slug) || null;
}
