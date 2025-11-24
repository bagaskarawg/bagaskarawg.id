import { Container } from "@/components/ui/container";
import { Github, Linkedin, Twitter } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                    <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                            Built by <span className="font-medium text-foreground">{CONTACT_INFO.name}</span>.
                            The source code is available on{" "}
                            <a
                                href={CONTACT_INFO.social.github.url + '/bagaskarawg.id'}
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium underline underline-offset-4"
                            >
                                GitHub
                            </a>
                            .
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href={CONTACT_INFO.social.github.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href={CONTACT_INFO.social.linkedin.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href={CONTACT_INFO.social.twitter.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
