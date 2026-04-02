export function extractQueryString(url) {
  const parsedUrl = new URL(url);
  const params = new URLSearchParams(parsedUrl.search);
  return params; // returns URLSearchParams object
}
