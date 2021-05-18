setInterval(() => {
  console.log(Deno.readTextFileSync('./interval.js'));
}, 2000);
