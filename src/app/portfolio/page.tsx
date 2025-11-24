import { getAllProjects } from "@/lib/portfolio";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export const metadata = constructMetadata({
    title: "Portfolio",
    description: "Showcase of my recent work and projects.",
});

export default async function PortfolioPage() {
    const projects = await getAllProjects();

    return (
        <Container className="py-12">
            <div className="space-y-12">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Portfolio</h1>
                    <p className="text-muted-foreground max-w-2xl">
                        A collection of projects I've worked on. Ranging from web applications to open source libraries.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.slug} className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/50">
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    <Link href={`/portfolio/${project.slug}`}>
                                        <span className="absolute inset-0" />
                                        {project.title}
                                    </Link>
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
