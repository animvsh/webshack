export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const target = new URL(incoming.pathname + incoming.search, "https://webshack.pages.dev");
    const response = await fetch(target, request);
    const headers = new Headers(response.headers);
    headers.delete("x-robots-tag");
    if ((headers.get("content-type") || "").includes("text/html")) {
      headers.set("cache-control", "no-store, max-age=0");
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
