/**
 * Estimates reading time for a block of text.
 * Average adult reading speed: ~200 words per minute.
 * Returns a formatted string like "3 min read".
 */
export function readingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Formats an ISO date string (YYYY-MM-DD) into a readable label.
 * e.g. "2025-06-01" → "June 1, 2025"
 */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
