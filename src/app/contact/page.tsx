import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { CONTACT_INFO } from "@/lib/constants";
import { Mail, Phone, Github, Linkedin, Twitter, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Bagaskara Wisnu Gunawan",
    description: "Get in touch with Bagaskara Wisnu Gunawan for project inquiries and collaborations.",
};

export default function ContactPage() {
    return (
        <div className="py-24 md:py-32">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Have a project in mind or want to discuss a potential collaboration?
                                I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-semibold hover:text-primary transition-colors">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-semibold hover:text-primary transition-colors">
                                        {CONTACT_INFO.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                                    <p className="text-lg font-semibold">
                                        Indonesia (Remote Available)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border">
                            <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                            <div className="flex gap-4">
                                <a
                                    href={CONTACT_INFO.social.github.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href={CONTACT_INFO.social.linkedin.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href={CONTACT_INFO.social.twitter.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </div>
    );
}
