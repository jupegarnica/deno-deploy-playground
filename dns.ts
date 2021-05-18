const a = await Deno.resolveDns("juanchorro.com", "A");

console.log(a);

// const aaaa = await Deno.resolveDns("juanchorro.com", "A", {
//     nameServer: { ipAddr: "8.8.8.8", port: 1234 },
//   });
//   console.log(aaaa);
