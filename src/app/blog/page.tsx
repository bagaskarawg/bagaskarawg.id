import { getAllPosts } from "@/lib/blog";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Blog",
    description: "Thoughts on software development, tech, and more.",
});

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <Container className="py-12">
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Blog</h1>
                    <p className="text-muted-foreground">
                        Thoughts on software development, tech, and more.
                    </p>
                </div>

                <div className="grid gap-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="group relative flex flex-col space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <time dateTime={post.date}>{post.date}</time>
                            </div>
                            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground">{post.excerpt}</p>
                        </article>
                    ))}
                </div>
            </div>
        </Container>
    );
}
