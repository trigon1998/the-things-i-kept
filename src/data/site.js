export const siteName = 'The Things I Kept.';
export const base = '/the-things-i-kept';

// Handles a GitHub Pages project subpath in production AND local dev.
export function href(path = '/') {
  if (/^https?:\/\//i.test(path)) return path;
  return base + (path.startsWith('/') ? path : '/' + path);
}
