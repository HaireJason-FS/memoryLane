export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string;
}

export const posts: Post[] = [
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
  },
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
  },
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
  },
];
