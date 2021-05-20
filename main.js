import {
  serve,
  serveStatic,
} from 'https://deno.land/x/sift@0.3.1/mod.ts';
import { myIp } from './myIp.jsx';
serve({
  '/': () =>
    new Response(null, {
      headers: {
        location: 'https://garn.dev',
      },
      status: 301,
    }),
  '/ip': myIp,
  '/screen': serveStatic('screen.html', {
    baseUrl: import.meta.url,
  }),

  404: () => new Response('not found'),
});
