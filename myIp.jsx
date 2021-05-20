import {
  jsx,
  h,
  // PathParams,
  // serve,
} from 'https://deno.land/x/sift@0.3.1/mod.ts';

const Main = ({ children }) => (
  <main>
    <style>
      {`
      body {
        margin:0
      }

      main {
        background:linear-gradient(
            135deg,
            rgb(77, 47, 126) 30%,
            #51327577 100%
        );
        font-size: clamp(20px, 5vmin, 150px);
        background-color: tomato;
        color:white;
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
    }`}
    </style>
    {children}
  </main>
);

export function myIp(request) {
  const ip = request.headers.get('x-forwarded-for');
  return jsx(
    <Main>
      <h1>{ip || 'unknown ip'}</h1>
    </Main>,
  );
}
