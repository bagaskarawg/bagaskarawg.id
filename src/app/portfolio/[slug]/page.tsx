import { getProjectBySlug, getAllProjects } from "@/lib/portfolio";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata(props: Props) {
    const params = await props.params;
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        return constructMetadata({
            title: "Project Not Found",
        });
    }

    return constructMetadata({
        title: project.title,
        description: project.description,
    });
}

export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage(props: Props) {
    const params = await props.params;
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <Container className="py-12">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">{project.title}</h1>
                        <p className="text-xl text-muted-foreground">{project.description}</p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    Live Demo
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            )}
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    View Code
                                    <Github className="ml-2 h-4 w-4" />
                                </a>
                            )}
                        </div>

                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                                <Carousel images={project.screenshots} />
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <article className="prose dark:prose-invert prose-red max-w-none border-t border-border pt-8">

                        <MDXRemote source={project.content} />
                    </article>
                </div>
            </div>
        </Container>
    );
}
