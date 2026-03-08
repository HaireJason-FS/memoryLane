import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function Home() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="archive">
      <div className="archive__header">
        <h1>Archive</h1>
        <p>{posts.length} posts</p>
      </div>

      <div className="archive__list">
        {sorted.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
