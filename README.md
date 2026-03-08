# Memory Lane

A static blog/journal site built with Vite + React + TypeScript for WDV 463 at Full Sail University.

**Student:** Jason Haire  
**Course:** WDV 463

---

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [React Router v7](https://reactrouter.com) — client-side routing
- [Sass/SCSS](https://sass-lang.com) — custom styles via partials

## Getting Started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview the production build locally
```

## Adding a Post

Open `src/data/posts.ts` and add a new object to the `posts` array:

```ts
{
  id: "my-new-post",          // becomes the URL: /post/my-new-post
  title: "My New Post",
  date: "2025-07-01",         // YYYY-MM-DD
  excerpt: "A short summary shown on the archive page.",
  tags: ["tag1", "tag2"],
  body: `Your full post content here.
  
Use double line breaks to separate paragraphs.`,
}
```

## Project Structure

```
src/
  data/posts.ts         ← all post content (edit this to add posts)
  components/
    Layout.tsx          ← shared header / nav / footer
    PostCard.tsx        ← archive list card
  pages/
    Home.tsx            ← archive page (lists all posts)
    PostPage.tsx        ← individual post page
    NotFound.tsx        ← 404 page
  utils/
    readingTime.ts      ← reading time + date formatting utilities
  styles/
    _variables.scss     ← colors, typography, spacing tokens
    _base.scss          ← reset + global styles
    _layout.scss        ← header, nav, footer, main
    _home.scss          ← archive page + post cards
    _post.scss          ← individual post + 404
    main.scss           ← imports all partials
```

## Deployment

After `npm run build`, deploy the `dist/` folder to any static host:
- [Netlify Drop](https://app.netlify.com/drop)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)

---

*WDV 463 | Full Sail University*
