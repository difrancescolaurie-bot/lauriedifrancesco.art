export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    const url = new URL('/404.html', request.url);
    const page = await env.ASSETS.fetch(new Request(url, { method: 'GET' }));
    return new Response(page.body, { status: 404, headers: page.headers });
  }
};
