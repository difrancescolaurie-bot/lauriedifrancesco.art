export async function onRequest(context) {
  const response = await context.next();
  if (response.status !== 404) return response;

  const url = new URL('/404.html', context.request.url);
  const page = await fetch(url.toString());
  return new Response(page.body, {
    status: 404,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
