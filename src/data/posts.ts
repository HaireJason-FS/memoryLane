export interface PostSource {
  label: string;
  url: string;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string;
  image?: string;
  sources?: PostSource[];
}

export const posts: Post[] = [
  // React Api best practices
  {
    id: "react-api-best-practices",
    title: "Best Practices for Using APIs within React",
    date: "2025-06-25",
    excerpt:
      "Fetching data in React is easy to get wrong. Here's what I learned building a full MERN app from scratch.",
    tags: ["react", "api", "javascript", "best-practices"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    body: `
Building a frontend that talks to an API feels straightforward until it isn't. Over the course of building a full MERN stack vehicle inventory app, I ran into enough small mistakes that I wanted to document what actually works.

Keep your API base URL in one place.

The most painful lesson was scattering fetch calls with hardcoded URLs across multiple components. When the API moved from localhost to a deployed Render service, I had to hunt down every single call. The fix is simple: one config file that exports a base URL, read from an environment variable. In Vite that looks like import.meta.env.VITE_API_URL. Every fetch call imports from that one file. When the URL changes, you change it once.

Always handle loading and error states.

A component that fires a fetch on mount has three possible states: loading, success, and error. Skipping loading or error handling isn't a time save — it's a bug waiting to surface in front of someone else. At minimum, show a loading indicator while the request is in flight and display a readable message when it fails. Users and graders both notice when a page silently breaks.

Don't fetch inside deeply nested components.

It's tempting to put a fetch call wherever the data is needed. But fetching inside a child component means that component owns data that might be needed elsewhere, and you end up either re-fetching or drilling props in awkward directions. Fetch at the page level, pass data down as props. If the data needs to be shared more broadly, lift it to a shared parent.

Use the proxy in development.

Running a React frontend on port 5173 and an Express API on port 5000 means every fetch hits a different origin. Rather than hardcoding the full localhost URL and dealing with CORS locally, configure Vite's server.proxy to forward /api requests to the API server. Your fetch calls stay clean (/api/vehicles instead of http://localhost:5000/api/vehicles), and the proxy handles the cross-origin issue entirely in development.

Match your HTTP methods to what's actually happening.

GET for reading, POST for creating, PUT for replacing, DELETE for removing. This sounds obvious but it's easy to default to POST for everything when you're moving fast. Using the right method makes your API readable, predictable, and easier to debug in the network tab. It also satisfies any grader or collaborator who knows what a RESTful API is supposed to look like.

Check response status before parsing JSON.

Fetch doesn't throw on HTTP errors — a 404 or 500 still resolves the promise successfully. If you call res.json() on an error response that returns HTML (like a Vercel 404 page), you get a cryptic parse error instead of a useful message. Always check res.ok before parsing. That one check prevents the most confusing category of production bugs I've run into.
    `.trim(),
    sources: [
      { label: "Vite — Env Variables and Modes", url: "https://vitejs.dev/guide/env-and-mode" },
      { label: "Vite — Server Proxy Options", url: "https://vitejs.dev/config/server-options#server-proxy" },
      { label: "React — useEffect Reference", url: "https://react.dev/reference/react/useEffect" },
      { label: "MDN — Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
    ],
  },
  // Getting started with vite
  {
    id: "getting-started-with-vite",
    title: "Getting Started with Vite",
    date: "2025-06-01",
    excerpt:
      "Vite changed how I think about frontend tooling. Here's what made it click for me.",
    tags: ["tooling", "vite", "react"],
    body: `
Vite is a build tool that takes a radically different approach to development. Instead of bundling your entire app before serving it, Vite serves your source files over native ES modules during development — meaning the browser does the module resolution itself.

This makes cold starts nearly instant, no matter how large your project gets. Hot Module Replacement (HMR) is also surgical: only the module that changed gets swapped out, not the whole page.

The config is minimal by design. A basic Vite + React project needs almost no configuration to be production-ready. The \`vite.config.ts\` file is optional until you need something specific.

For production, Vite uses Rollup under the hood, which produces highly optimized static output. The \`dist/\` folder is everything you need — drop it anywhere and you have a working site.

If you've been putting off trying Vite because your current setup "works fine," I'd encourage a weekend experiment. It's one of those tools that quietly improves your day-to-day without demanding much in return.
    `.trim(),
    sources: [
      { label: "Vite — Official Documentation", url: "https://vitejs.dev/guide/" },
      { label: "Vite — Why Vite?", url: "https://vitejs.dev/guide/why" },
      { label: "Rollup — The JavaScript Bundler", url: "https://rollupjs.org/" },
    ],
  },
  // Why TS is worth it
  {
    id: "why-typescript-is-worth-it",
    title: "Why TypeScript Is Worth It",
    date: "2025-06-10",
    excerpt:
      "I resisted TypeScript for a long time. Then I stopped and started actually using it.",
    tags: ["typescript", "javascript", "opinion"],
    body: `
For a long time, TypeScript felt like ceremony — extra syntax for problems I didn't think I had. I was wrong.

The shift happened when I started working on larger components. Without types, I'd regularly pass the wrong shape of data into a function and find out only at runtime. TypeScript surfaces those mistakes at the editor level, before a single line runs.

The biggest win for me was autocomplete. When your data has a defined interface, your editor knows exactly what properties are available. It's not just a nicety — it genuinely speeds up how fast you can work.

TypeScript is also excellent documentation. A function signature like \`(post: Post) => string\` tells the next developer (or future you) more than a comment ever could.

There's a learning curve, and the error messages can be intimidating at first. But the return on investment starts paying off faster than most people expect. Start small, add types incrementally, and it clicks.
    `.trim(),
    sources: [
      { label: "TypeScript — Official Documentation", url: "https://www.typescriptlang.org/docs/" },
      { label: "TypeScript — The TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
      { label: "MDN — JavaScript Data Types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" },
    ],
  },
  // Static sites still matter
  {
    id: "static-sites-still-matter",
    title: "Static Sites Still Matter",
    date: "2025-06-18",
    excerpt:
      "Not everything needs a database. Sometimes the right answer is a folder of HTML files.",
    tags: ["web", "deployment", "opinion"],
    body: `
There's a running joke in web development that we've spent twenty years building ever more complex systems to replicate what GeoCities did natively. There's more truth in that than we like to admit.

Static sites — HTML, CSS, and JavaScript, no server required — are having a genuine renaissance. Platforms like Netlify, Vercel, and GitHub Pages have made deployment trivial. You push code, a build runs, and your site is live globally in under a minute.

For content that doesn't change in real time, static is often the right answer. A blog, a portfolio, a documentation site, a class assignment — none of these need a database or an API to function correctly.

The benefits stack up quickly: no server to maintain, no database to back up, no attack surface for server-side vulnerabilities. Sites load fast because they're just files on a CDN.

The mental model is simple too. What you build locally is what gets deployed. There's no "server environment" to configure or production parity to worry about. That simplicity is underrated.
    `.trim(),
    sources: [
      { label: "Vercel — Frontend Cloud Platform", url: "https://vercel.com" },
      { label: "Netlify — Deploy & Scale Modern Web Projects", url: "https://www.netlify.com" },
      { label: "GitHub Pages — Websites for You and Your Projects", url: "https://pages.github.com" },
    ],
  },
  // Why accessibility matters
  {
    id: "why-accessibility-matters",
    title: "Why Accessibility (a11y) Is Crucial When Building an App",
    date: "2025-07-02",
    excerpt:
      "Accessibility isn't a checkbox or an afterthought. It's a baseline that makes your app work for everyone — including your future self.",
    tags: ["accessibility", "a11y", "web", "best-practices"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
    body: `
Accessibility — shortened to a11y in the industry — refers to building apps that can be used by people regardless of their abilities. That includes people who rely on screen readers, keyboard-only navigation, high contrast displays, or reduced motion settings. It also includes people on slow connections, people using older devices, and people in bright sunlight squinting at low-contrast text.

The case for building accessibly isn't only ethical, though it is that. It's also practical.

Semantic HTML is free accessibility.

Using the right HTML element for the job — a button for a button, a nav for navigation, a main for the main content area — gives browsers and assistive technology the information they need to work correctly without any extra effort from you. A div with an onClick is not a button. It won't receive keyboard focus by default, it won't announce itself to a screen reader, and it won't respond to the Enter key. The actual button element does all of that out of the box.

Color contrast is more important than you think.

The WCAG guideline for normal text is a contrast ratio of at least 4.5:1 against its background. This isn't an arbitrary number — it's the threshold where text becomes readable for people with moderate low vision. When you're choosing muted text colors for supporting information, it's easy to slip below this line without noticing. Tools like the browser's built-in accessibility inspector or online contrast checkers make it a two-second verification.

Keyboard navigation reveals hidden problems.

Try using your app without a mouse. Tab through forms, activate buttons with Enter, close modals with Escape. If you get stuck, or if focus disappears into a part of the UI you can't see, you've found a real bug — one that affects a broader group of users than you might expect. Focus management is particularly important in single-page apps where route changes don't automatically move focus the way a full page reload would.

Alt text is not optional.

Every meaningful image needs an alt attribute that describes what the image communicates, not just what it depicts. A photo of a car on a vehicle listing should say something like "2018 Audi Q7 in silver" — not "car image" or nothing at all. Decorative images that add no information should have an empty alt attribute (alt="") so screen readers skip them entirely.

Building accessibly from the start is faster than retrofitting it later. The further through a project you get, the more expensive each fix becomes. It's the same reason you handle error states while writing the component rather than after a user reports a blank screen.
    `.trim(),
    sources: [
      { label: "W3C — WCAG 2.1 Quick Reference", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
      { label: "MDN — Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility" },
      { label: "WebAIM — Contrast Checker", url: "https://webaim.org/resources/contrastchecker/" },
      { label: "MDN — The Button Element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" },
    ],
  },
  // How AI is changing how devs code
  {
    id: "ai-changing-how-developers-code",
    title: "How AI Is Changing the Way Developers Code",
    date: "2025-07-09",
    excerpt:
      "The surveys are in, the studies are published, and the picture is more complicated than the headlines suggest.",
    tags: ["ai", "tooling", "workflow", "opinion"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    body: `
AI coding tools are no longer a novelty or a bet on the future. According to JetBrains' 2025 Developer Ecosystem Survey — which collected responses from 24,534 developers across 194 countries — 85% of developers now regularly use AI tools for coding, and 62% rely on at least one AI coding assistant or agent as a core part of their workflow. Stack Overflow's 2025 Developer Survey puts weekly active usage at 65%. By almost any measure, these tools have crossed from experimental to standard.

But standard doesn't mean universally positive. The same Stack Overflow survey found that favorable sentiment toward AI tools has dropped from above 70% in 2023 and 2024 to just 60% in 2025. More telling: 46% of developers actively distrust the accuracy of AI output, while only 33% trust it — and experienced developers are the most skeptical, with the highest rate of high distrust in the entire survey.

The productivity paradox.

The headline claim from vendors and tech leaders is straightforward: AI makes developers faster. Google CEO Sundar Pichai has stated that roughly 25% of Google's code is now AI-assisted, and Microsoft-backed research points to a 21% productivity boost in complex knowledge work. GitHub Copilot data shows daily AI users merging around 60% more pull requests than occasional users.

But a July 2025 randomized controlled trial by the nonprofit research organization METR complicated that picture considerably. The study recruited 16 experienced developers working on large open-source repositories they knew well, and randomly assigned tasks with and without AI assistance. The result: developers using AI tools took 19% longer than those working without them. The researchers noted the result was specific to experienced developers on familiar codebases, and that AI may still be genuinely useful in other contexts — for newer developers, or in unfamiliar territory. But the gap between perceived and actual speed gains is worth taking seriously.

What the tools are actually being used for.

ChatGPT and GitHub Copilot lead adoption by a wide margin — 82% and 68% respectively in the Stack Overflow survey. Google's Gemini sits at 47%, and Anthropic's Claude at 41%. Each has developed a distinct reputation in practice. Copilot is the default for in-editor autocomplete and boilerplate. ChatGPT handles fast, self-contained generation tasks. Gemini benefits from Google Search integration, making it useful for current information and documentation lookups. Claude is increasingly cited for longer, more contextual reasoning work — auditing codebases, explaining architectural tradeoffs, working through multi-file problems.

Figma occupies a different category. Its AI-assisted prototyping and design-to-code tooling has narrowed the gap between mockup and working component, reducing the back-and-forth between design and development without requiring either side to fully understand the other's tools.

According to Qodo's research, the biggest barrier to getting value from AI-generated code is not hallucinations — it's missing context. 65% of developers cite context gaps as the primary source of poor quality during refactoring, and around 60% during test generation and code review. The implication is that the tools work best when they have access to your actual codebase and conventions, not when they're generating from a blank slate.

The code quality question.

Data from GitClear shows developers producing roughly 10% more durable code — code that isn't deleted or rewritten within weeks — since 2022, a gain likely attributable to AI assistance. But that improvement has come alongside sharp declines in other quality indicators, including rising code duplication and increased short-term churn. Qodo's survey found that only 3.8% of developers report both low hallucination rates and high confidence in shipping AI-generated code without human review.

The industry consensus forming around this is captured well by JetBrains' framing: 2025 was the year of AI speed. 2026 is expected to be the year of AI quality. The organizations seeing the best outcomes aren't just the ones with the highest adoption rates — they're the ones pairing adoption with code review practices, governance, and training.

The fundamentals still determine the ceiling.

For all the change in tooling, the Stack Overflow data makes one thing clear: the developers who get the most out of AI are the ones who can evaluate what it gives them. AI-generated code fails in ways that are hard to debug if you don't understand what the code is supposed to do. The faster you can produce code, the more important it becomes to know whether what you produced is actually correct. Adoption alone isn't the differentiator anymore — not using AI is now the outlier. What separates teams is how deliberately they've thought about where AI fits and where human judgment still has to be the final call.
    `.trim(),
    sources: [
      { label: "JetBrains — State of Developer Ecosystem 2025", url: "https://blog.jetbrains.com/research/2025/10/state-of-developer-ecosystem-2025/" },
      { label: "Stack Overflow — 2025 Developer Survey: AI", url: "https://survey.stackoverflow.co/2025/ai/" },
      { label: "METR — Measuring the Impact of Early-2025 AI on Developer Productivity", url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" },
      { label: "Qodo — State of AI Code Quality 2025", url: "https://www.qodo.ai/reports/state-of-ai-code-quality/" },
      { label: "MIT Technology Review — AI Coding Is Now Everywhere", url: "https://www.technologyreview.com/2025/12/15/1128352/rise-of-ai-coding-developers-2026/" },
      { label: "Second Talent — AI Coding Assistant Statistics & Trends 2025", url: "https://www.secondtalent.com/resources/ai-coding-assistant-statistics/" },
    ],
  },
];
