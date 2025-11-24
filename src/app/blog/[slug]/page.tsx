import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { Container } from "@/components/ui/container";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata(props: Props) {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return constructMetadata({
            title: "Post Not Found",
        });
    }

    return constructMetadata({
        title: post.title,
        description: post.excerpt,
    });
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage(props: Props) {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <Container className="py-12">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </Link>

                <article className="prose dark:prose-invert prose-red max-w-none">

                    <div className="mb-8 space-y-4">
                        <time className="text-sm text-muted-foreground">{post.date}</time>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">{post.title}</h1>
                    </div>

                    <MDXRemote source={post.content} />
                </article>
            </div>
        </Container>
    );
}
