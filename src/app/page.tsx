import { Container } from "@/components/ui/container";
import { Timeline } from "@/components/ui/timeline";
import { getAllProjects } from "@/lib/portfolio";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Terminal, Cpu, Mail, Download } from "lucide-react";



export default async function Home() {
  const projects = (await getAllProjects()).slice(0, 3);
  const posts = (await getAllPosts()).slice(0, 3);

  const experience = [
    {
      year: "June 2024 - Present",
      title: "Chief Executive Officer",
      company: "BaHas Technology",
      description: "Leading the company and overseeing strategic direction.",
      logo: "/companies/1_BAHAS TECHNOLOGY.png",
    },
    {
      year: "May 2021 - Present",
      title: "Freelance Software Engineer",
      company: "Upwork",
      description: "Working for several clients around the globe to solve complex challenges for multiple types of apps.",
      logo: "/companies/2_UPWORK.png",
    },
    {
      year: "July 2022 - March 2023",
      title: "Frontend Developer",
      company: "Desygner",
      description: "Remote frontend development focusing on user interface and experience.",
      logo: "/companies/3_DESYGNER.png",
    },
    {
      year: "July 2020 - July 2022",
      title: "Back End Developer",
      company: "Atech Software",
      description: "Remote backend development.",
      logo: "/company-placeholder.png",
    },
    {
      year: "October 2018 - June 2021",
      title: "Full Stack Web Developer",
      company: "Yuca LTD",
      description: "Tested websites, performed troubleshooting, and built interfaces with HTML/CSS.",
      logo: "/companies/5_YUCA.png",
    },
    {
      year: "October 2016 - September 2018",
      title: "Web Developer",
      company: "Turboly",
      description: "Delivered high availability solutions and collaborated with cross-functional teams.",
      logo: "/companies/6_TURBOLY.png",
    },
    {
      year: "January 2016 - September 2016",
      title: "Full-stack Web Developer",
      company: "LINK Integrasi",
      description: "Analyzed requirements and implemented software applications for multiple websites.",
      logo: "/companies/7_LINK.png",
    },
    {
      year: "May 2015 - December 2015",
      title: "Implementation Engineer",
      company: "PT Jerbee Indonesia",
      description: "Assisted clients with software implementation lifecycles and performed various tests.",
      logo: "/company-placeholder.png",
    },
  ];



  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50"></div>
        <Container>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Available for hire
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-foreground">
                Bagaskara <br />
                <span className="text-primary">Wisnu Gunawan</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Senior Full Stack Developer with 10+ years of experience.
                Specializing in building scalable, high-performance web applications using modern technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden md:block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-30 blur-2xl"></div>
              <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border-4 border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/hero-avatar.png"
                  alt="Bagaskara Wisnu Gunawan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About & Experience Section */}
      <section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <div className="prose dark:prose-invert text-muted-foreground">

                <p>
                  I am a passionate developer who loves solving complex problems with clean, efficient code.
                  With over a decade of experience in the industry, I have had the privilege of working with
                  startups and established companies to bring their digital visions to life.
                </p>
                <p>
                  My expertise spans the entire development stack, from designing intuitive user interfaces
                  to architecting robust backend systems. I am constantly learning and adapting to new
                  technologies to stay ahead of the curve.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "Vue.js", "Nuxt.js", "Svelte", "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker", "AWS"].map((tech) => (
                    <div key={tech} className="flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
              <Timeline items={experience} />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="bg-secondary/20 py-24">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <Link href="/portfolio" className="text-primary hover:underline inline-flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.slug} className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-colors hover:border-primary/50">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/portfolio/${project.slug}`}>
                      <span className="absolute inset-0" />
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest Posts */}
      <section>
        <Container>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Latest from the Blog</h2>
            <Link href="/blog" className="text-primary hover:underline inline-flex items-center gap-1">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="flex flex-col space-y-2">
                <time dateTime={post.date} className="text-sm text-muted-foreground">{post.date}</time>
                <h3 className="text-xl font-bold hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <Container>
          <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm currently available for freelance projects and open to new opportunities.
              If you have a project in mind or just want to say hi, feel free to reach out!
            </p>
            <Link
              href="mailto:bagaskara@bahas.tech"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
