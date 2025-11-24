import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
}

export function constructMetadata({
    title = "Dev Portfolio",
    description = "Personal portfolio of a senior full stack developer.",
    image = "/og-image.png",
    icons = "/favicon.ico",
    noIndex = false,
}: MetadataProps = {}): Metadata {
    return {
        title: {
            default: title,
            template: `%s | ${title}`,
        },
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@bagaskarawg",
        },
        icons,
        metadataBase: new URL("https://portfolio.example.com"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
