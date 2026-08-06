import Box from "@mui/material/Box";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/hero/HeroSection";
import TechMarquee from "../components/marquee/TechMarquee";
import AboutSection from "../components/about/AboutSection";
import ValueSection from "../components/about/ValueSection";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import BlogSection from "../components/blog/BlogSection";
import ContactSection from "../components/contact/ContactInfo";
import ChatWidget from "../components/chat/ChatWidget";
import StatsStrip from "../components/common/StatsStrip";
import TrustBar from "../components/contact/TrustBar";

import {
  profile,
  techStack,
  aboutStats,
  toolTags,
  experience,
  projects,
  blogPosts,
  chatbot,
} from "../data/siteData";

import { localAssistantReply } from "../lib/localAssistant";

// Wire the real backend (OpenAI, Gemini, a /api/chat route, etc.)
// Until that route exists, this gracefully falls back to a local, canned
// assistant (see src/lib/localAssistant.js) so the widget always works.
async function handleChatMessage(message, history) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
    });
    if (!res.ok) throw new Error("Chat request failed");
    const data = await res.json();
    return data.reply;
  } catch (err) {
    // No backend wired up yet (or it errored) — answer locally instead
    // of showing a broken-looking error to the visitor.
    await new Promise((r) => setTimeout(r, 400)); // small delay so it still feels like "thinking"
    return localAssistantReply(message);
  }
}

// Wire this up to your real contact endpoint / email service.
async function handleContactSubmit(values) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error("Failed to send message");
}

export default function HomePage() {
  return (
    <>
      <Navbar logoText={profile.logoText} resumeUrl={profile.resumeUrl} />

      <HeroSection
        badge={profile.badge}
        name={profile.name}
        tagline={profile.tagline}
        resumeUrl={profile.resumeUrl}
        onContactClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <TechMarquee items={techStack} />

      <StatsStrip />

      <AboutSection
        headline={
          <>
            I build web applications that feel{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              fast, clean
            </Box>{" "}
            and genuinely enjoyable to use.
          </>
        }
        stats={aboutStats}
        tools={toolTags}
      />

      <ValueSection
        title="I design and ship frontend experiences that feel polished, reliable, and easy to trust."
        intro="My focus is turning product ideas into interfaces that are clean, fast, and thoughtful—whether I’m building for a startup, a client, or a growing product team. I care about both code quality and how the experience feels for the person using it."
        badge="OPEN TO FRONTEND ROLES & FREELANCE"
        highlights={[
          {
            icon: "speed",
            title: "Fast-moving execution",
            description: "I move quickly from idea to implementation while keeping the UI structured, responsive, and maintainable.",
          },
          {
            icon: "design",
            title: "Design-aware development",
            description: "I translate mockups into polished interfaces with strong attention to spacing, hierarchy, and interaction details.",
          },
          {
            icon: "team",
            title: "Team-friendly collaboration",
            description: "I communicate clearly with designers, developers, and stakeholders to keep projects moving without friction.",
          },
          {
            icon: "spark",
            title: "Modern frontend mindset",
            description: "I enjoy building with React, component-based systems, and thoughtful UX patterns that scale well over time.",
          },
        ]}
        proofPoints={[
          "Frontend development with React, Angular, and modern UI libraries",
          "Experience building responsive and client-facing product interfaces",
          "Comfortable working across fast-paced teams and independent delivery",
        ]}
      />

      <ExperienceTimeline heading="Where I've worked" items={experience} />

      <ProjectsGrid heading="Selected work" items={projects} />

      <TrustBar />

      <BlogSection
        heading="From the blog"
        subtitle="Thoughts on React, frontend architecture, and shipping clean code — cross-posted from Medium & Hashnode."
        posts={blogPosts}
      />

      <ContactSection
        heading="Let's build something great."
        subtitle="Open to React / Frontend roles and interesting collaborations. Available Mon–Fri, 9:00 AM – 5:00 PM IST. Reach out via email or the form."
        email={profile.email}
        onSubmit={handleContactSubmit}
      />

      <Footer
        name={`${profile.name[0]} ${profile.name[1]}`}
        email={profile.email}
        location={profile.location}
        socials={profile.socials}
      />

      <ChatWidget
        name={chatbot.name}
        subtitle={chatbot.subtitle}
        greeting={chatbot.greeting}
        suggestions={chatbot.suggestions}
        onSendMessage={handleChatMessage}
      />
    </>
  );
}
