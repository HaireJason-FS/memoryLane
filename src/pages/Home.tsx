import { useState } from "react";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

type SortOrder = "newest" | "oldest";

export default function Home() {
  const [order, setOrder] = useState<SortOrder>("newest");

  const sorted = [...posts].sort((a, b) => {
    const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
    return order === "newest" ? diff : -diff;
  });

  return (
    <section className="archive">
      <div className="archive__header">
        <div className="archive__heading">
          <h1>Archive</h1>
          <p>{posts.length} posts</p>
        </div>

        <div className="archive__sort">
          <button
            className={`sort-btn ${order === "newest" ? "sort-btn--active" : ""}`}
            onClick={() => setOrder("newest")}
          >
            Newest
          </button>
          <button
            className={`sort-btn ${order === "oldest" ? "sort-btn--active" : ""}`}
            onClick={() => setOrder("oldest")}
          >
            Oldest
          </button>
        </div>
      </div>

      <div className="archive__list">
        {sorted.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
