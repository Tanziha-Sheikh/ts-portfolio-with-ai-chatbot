import { profile, techStack, experience, projects, toolTags } from "../data/siteData";

export function localAssistantReply(message) {
  const q = message.toLowerCase();

  if (/(tech stack|technolog|stack|skills?)/.test(q)) {
    return `My core stack is ${techStack.slice(0, 4).join(", ")}, plus ${toolTags
      .slice(4, 8)
      .join(", ")}.`;
  }

  if (/(project|built|portfolio work|shipped)/.test(q)) {
    const p = projects[0];
    return `One I'm proud of is "${p.title}" — ${p.description} Built with ${p.tags.join(
      ", "
    )}. Check the Projects section for the rest.`;
  }

  if (/(experience|worked|work history|job|role)/.test(q)) {
    const e = experience[0];
    return `Most recently I worked as ${e.role} at ${e.company} (${e.period}). ${e.points[0]}`;
  }

  if (/(hire|available|open to|joining|notice period)/.test(q)) {
    return `${profile.badge}. Feel free to reach out at ${profile.email} or use the contact form below.`;
  }

  if (/(contact|email|reach|touch)/.test(q)) {
    return `You can reach me at ${profile.email}, or send a message directly using the contact form on this page.`;
  }

  if (/(resume|cv|download)/.test(q)) {
    return `You can download my resume using the "Resume" button in the navbar.`;
  }

  return "Good question — I'm running in offline demo mode right now, so my answers are limited to a few topics: tech stack, projects, experience, and hiring availability. Ask me one of those, or connect a real AI backend for open-ended answers (see the README).";
}
