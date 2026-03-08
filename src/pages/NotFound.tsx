import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found__code">404</span>
      <h1>Page not found</h1>
      <p>The post or page you're looking for doesn't exist.</p>
      <Link to="/" className="not-found__link">
        &larr; Back to archive
      </Link>
    </section>
  );
}
