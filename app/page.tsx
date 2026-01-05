"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Terminal, Code2, Server, Database, GitBranch, Cpu, Cloud, Monitor, Mail, Phone, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Jerry Ngo"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen coffee-texture code-pattern relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 float-animation" style={{ animationDelay: "0s" }}>
          <Code2 size={80} className="text-accent" />
        </div>
        <div className="absolute top-40 right-20 float-animation" style={{ animationDelay: "1s" }}>
          <Terminal size={60} className="text-accent" />
        </div>
        <div className="absolute bottom-40 left-20 float-animation" style={{ animationDelay: "2s" }}>
          <Server size={70} className="text-accent" />
        </div>
        <div className="absolute bottom-20 right-40 float-animation" style={{ animationDelay: "3s" }}>
          <Database size={65} className="text-accent" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="font-mono text-accent text-sm md:text-base mb-4 flex items-center justify-center gap-2">
            <Terminal size={20} />
            <span className="opacity-70">$</span>
            <span className="opacity-90">whoami</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary relative inline-block">
            {typedText}
            <span className="terminal-cursor inline-block w-0.5 h-12 md:h-16 bg-accent ml-1 align-middle"></span>
          </h1>

          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="mailto:huyngogia1997@gmail.com"
              className="p-2 rounded-lg bg-card/30 border border-border/50 hover:bg-card/60 hover:border-accent/50 transition-all hover:scale-110 hover:glow-accent group"
              aria-label="Email"
            >
              <Mail size={20} className="text-accent group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="tel:+84589052153"
              className="p-2 rounded-lg bg-card/30 border border-border/50 hover:bg-card/60 hover:border-accent/50 transition-all hover:scale-110 hover:glow-accent group"
              aria-label="Phone"
            >
              <Phone size={20} className="text-accent group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/huy-jerry-ngo-4625b4208/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card/30 border border-border/50 hover:bg-card/60 hover:border-accent/50 transition-all hover:scale-110 hover:glow-accent group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-accent group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          <div className="font-mono text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span className="text-accent">role:</span>
            <span className="text-foreground font-medium">Senior DevOps / Site Reliability Engineer</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-mono">
            {"// "}I design systems — and keep them reliable over time.
          </p>

          <div className="flex items-center justify-center gap-3 pt-6 flex-wrap">
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-secondary/80 hover:bg-secondary transition-all hover:scale-105 hover:glow-accent flex items-center gap-2"
            >
              <Cloud size={16} />
              AWS
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-secondary/80 hover:bg-secondary transition-all hover:scale-105 hover:glow-accent flex items-center gap-2"
              style={{ animationDelay: "100ms" }}
            >
              <Server size={16} />
              Kubernetes
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-secondary/80 hover:bg-secondary transition-all hover:scale-105 hover:glow-accent flex items-center gap-2"
              style={{ animationDelay: "200ms" }}
            >
              <Monitor size={16} />
              Datadog
            </Badge>
          </div>

          <div className="pt-8 max-w-2xl mx-auto">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 text-left font-mono text-sm overflow-hidden relative scan-line">
              <div className="text-accent mb-2">// system.config</div>
              <div className="space-y-1 text-foreground/80">
                <div className="animate-in fade-in duration-500 delay-100">
                  <span className="text-muted-foreground">const</span> <span className="text-primary">experience</span>{" "}
                  = <span className="text-accent">'3 years DevOps + 2 years FullStack'</span>;
                </div>
                <div className="animate-in fade-in duration-500 delay-300">
                  <span className="text-muted-foreground">const</span> <span className="text-primary">philosophy</span>{" "}
                  = <span className="text-accent">'Design, Track, Enhance'</span>;
                </div>
                <div className="animate-in fade-in duration-500 delay-500">
                  <span className="text-muted-foreground">const</span> <span className="text-primary">focus</span> = [
                  <span className="text-accent">'Reliability'</span>, <span className="text-accent">'Automation'</span>,{" "}
                  <span className="text-accent">'Scale'</span>];
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-mono text-accent text-sm mb-2 flex items-center justify-center gap-2">
              <GitBranch size={16} />
              <span>stack --list</span>
            </div>
            <h2 className="text-3xl font-semibold text-primary">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Cloud, name: "AWS", color: "oklch(0.7 0.15 30)" },
              { icon: Server, name: "Kubernetes", color: "oklch(0.6 0.15 250)" },
              { icon: Database, name: "Kafka/MSK", color: "oklch(0.65 0.1 180)" },
              { icon: Monitor, name: "Datadog", color: "oklch(0.55 0.18 320)" },
              { icon: Code2, name: "Terraform", color: "oklch(0.5 0.15 280)" },
              { icon: GitBranch, name: "CI/CD", color: "oklch(0.6 0.12 140)" },
              { icon: Terminal, name: "Automation", color: "oklch(0.55 0.08 150)" },
              { icon: Cpu, name: "Observability", color: "oklch(0.65 0.15 60)" },
            ].map((tech, index) => (
              <Card
                key={tech.name}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:glow-accent group cursor-pointer animate-in fade-in slide-in-from-bottom-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <tech.icon
                    size={40}
                    className="text-accent group-hover:scale-110 transition-transform"
                    style={{ color: tech.color }}
                  />
                  <span className="font-mono text-sm text-foreground/90">{tech.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 relative overflow-hidden matrix-bg">
            <div className="font-mono text-accent text-sm mb-4 flex items-center gap-2">
              <Code2 size={16} />
              <span>cat about.md</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">About</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                I bring 3 years of focused DevOps and SRE experience, plus 2 years of full-stack development background.
                This combination allows me to collaborate effectively with feature teams while maintaining a holistic
                view of system architecture.
              </p>
              <p className="text-foreground font-medium font-mono text-accent border-l-2 border-accent pl-4">
                Designing a system is just the first step; tracking and enhancing the system is where the true value
                lies.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Focus Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-mono text-accent text-sm mb-2">{"// "} core competencies</div>
            <h2 className="text-3xl font-semibold text-primary">Focus Areas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* DevOps Card */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-in fade-in slide-in-from-left-4 duration-700 delay-300 hover:border-accent/50 transition-all group">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2 font-mono">
                <Server size={24} className="text-accent group-hover:rotate-12 transition-transform" />
                DevOps
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse ml-2"></span>
              </h3>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>Landing zone / multi-account foundations</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>Infrastructure as Code (Terraform/CloudFormation mindset)</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>Automated delivery and on-demand provisioning</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>DR automation and operational readiness</span>
                </li>
              </ul>
            </Card>

            {/* SRE Card */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-in fade-in slide-in-from-right-4 duration-700 delay-300 hover:border-accent/50 transition-all group">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2 font-mono">
                <Monitor size={24} className="text-accent group-hover:rotate-12 transition-transform" />
                SRE
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse ml-2"></span>
              </h3>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>Observability platform thinking</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>Monitoring-as-code and standards at scale</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>Logs/metrics/traces pipelines</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>SLO/SLA mindset and incident troubleshooting</span>
                </li>
                <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                  <span className="text-accent mt-1 font-mono">›</span>
                  <span>Cost optimization through measurement</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-mono text-accent text-sm mb-2 flex items-center justify-center gap-2">
              <Cpu size={16} />
              <span>git log --impact</span>
            </div>
            <h2 className="text-3xl font-semibold text-primary">Impact Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                text: "Maintaining and patching Kafka/MSK infrastructure for high-throughput messaging",
                icon: Database,
              },
              { text: "Centralized backup solution for AWS organization", icon: Server },
              { text: "S3 virus scanning tooling for security compliance", icon: Cloud },
              {
                text: "Landing zone architecture for multi-tenant accounts with on-demand AWS provisioning",
                icon: Cpu,
              },
              { text: "Datadog platform enabling teams to deploy monitoring with common standards", icon: Monitor },
              { text: "Private-network streaming infrastructure for logs/traces/events/metrics", icon: GitBranch },
              { text: "Reduced Datadog and AWS log streaming costs by more than 70%", icon: Code2 },
            ].map((impact, index) => {
              const Icon = impact.icon
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 hover:border-accent/50 transition-all hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-2 duration-500 group"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      size={20}
                      className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <p className="text-foreground/90 leading-relaxed">{impact.text}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-mono text-accent text-sm mb-2">{"// "} achievements.json</div>
            <h2 className="text-3xl font-semibold text-primary">Certifications</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "AWS DevOps Engineer – Professional (2023)",
              "CKAD",
              "Datadog Fundamentals",
              "Datadog Log Management",
            ].map((cert, index) => (
              <Badge
                key={cert}
                variant="outline"
                className="text-base px-6 py-2 border-primary/30 bg-card/30 hover:bg-card/50 hover:border-accent/50 transition-all hover:scale-105 animate-in fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Philosophy */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-10 bg-card/40 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl animate-pulse">☕</span>
              <h2 className="text-2xl font-semibold text-primary font-mono">On Coffee & Reliability</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed border-l-2 border-accent pl-4">
              Like brewing the perfect cup of coffee, building reliable systems requires patience, consistency, and
              attention to detail. Every parameter matters—from temperature to timing—and the best results come from
              continuous refinement. It's not about rushing to production; it's about crafting something dependable that
              stands the test of time.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-6 py-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border-border/50 text-center hover:border-accent/50 transition-all">
            <div className="font-mono text-accent text-sm mb-4 flex items-center justify-center gap-2">
              <Terminal size={16} />
              <span>contact --info</span>
            </div>
            <h2 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h2>
            <div className="space-y-3 text-foreground/90">
              <p className="text-lg font-mono hover:text-accent transition-colors">huyngogia1997@gmail.com</p>
              <p className="text-lg font-mono hover:text-accent transition-colors">+84589052153</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
