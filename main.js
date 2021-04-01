addEventListener('fetch', async (event) => {
  const { pathname } = new URL(event.request.url);
  if (pathname.startsWith('/counter')) {
    let data = Number(await Deno.readTextFile('counter'));
    console.log(data);
    const next = String(++data);
    await Deno.writeTextFile('counter', next);
    const response = new Response(next, {
      headers: { 'content-type': 'text/plain' },
    });
    return event.respondWith(response);
  }

  const response404 = new Response('404', {
    status: 404,
    headers: {
      'content-type': 'text/plain; charset=UTF-8',
    },
  });
  return event.respondWith(response404);

});
