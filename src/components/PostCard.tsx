import { Link } from "react-router-dom";
import type { Post } from "../data/posts";
import { formatDate, readingTime } from "../utils/readingTime";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-card__meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="post-card__divider" aria-hidden="true">&middot;</span>
        <span>{readingTime(post.body)}</span>
      </div>

      <h2 className="post-card__title">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>

      <p className="post-card__excerpt">{post.excerpt}</p>

      <div className="post-card__tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      <Link to={`/post/${post.id}`} className="post-card__readmore">
        Read post &rarr;
      </Link>
    </article>
  );
}
