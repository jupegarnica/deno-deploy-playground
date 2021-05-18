import {
  jsx,
  h,
  // PathParams,
  // serve,
} from 'https://deno.land/x/sift@0.3.0/mod.ts';

export function myIp(request) {
  const ip = request.headers.get('x-forwarded-for');
  return jsx(<h1>{ip}</h1>);
}

// export function myIpPage(request) {
//   return new Response('hola')
// }
