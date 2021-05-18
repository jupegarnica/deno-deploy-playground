import { notify } from 'https://deno.land/x/deno_notify@0.4.4/ts/prepared.ts';

// Pass a simple message string
// notify('My message');

// Pass an options object (See mod.ts's NotifyOptions)
notify({
  title: 'A nice title',
  message: 'hellooo',
  icon: {
    app: "Terminal",
  },
  sound: "Basso",
});