import { useParams, Link, Navigate } from "react-router-dom";
import { posts } from "../data/posts";
import { formatDate, readingTime } from "../utils/readingTime";

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article className="post">
      {post.image && (
        <div className="post__hero">
          <img src={post.image} alt={post.title} className="post__hero-img" />
        </div>
      )}
      <header className="post__header">
        <div className="post__meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime(post.body)}</span>
        </div>

        <h1 className="post__title">{post.title}</h1>
        <p className="post__excerpt">{post.excerpt}</p>

        <div className="post__tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="post__body">
        {post.body.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {post.sources && post.sources.length > 0 && (
        <aside className="post__sources">
          <h2 className="post__sources-heading">Sources</h2>
          <ul className="post__sources-list">
            {post.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <footer className="post__footer">
        <Link to="/" className="post__back">
          &larr; Back to archive
        </Link>
      </footer>
    </article>
  );
}
