const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "bagaskarawg";
const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || "website-content";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const BASE_URL = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents`;

export async function fetchGitHubContent(path: string) {
    const headers: HeadersInit = {
        Accept: "application/vnd.github.v3+json",
    };

    if (GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    try {
        const res = await fetch(`${BASE_URL}/${path}`, {
            headers,
            next: { revalidate: 3600 }, // Revalidate every hour
        });

        if (!res.ok) {
            if (res.status === 404) return [];
            throw new Error(`GitHub API error: ${res.statusText}`);
        }

        const data = await res.json();
        return Array.isArray(data) ? data : [data];
    } catch (error) {
        console.error(`Error fetching from GitHub (${path}):`, error);
        return [];
    }
}

export async function fetchRawContent(url: string) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch raw content");
        return await res.text();
    } catch (error) {
        console.error("Error fetching raw content:", error);
        return "";
    }
}
