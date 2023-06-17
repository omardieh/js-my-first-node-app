const express = require("express");
const app = express();

app.use(express.static("public"));
// app.get("/home", (request, response, next) => {
//   // ...
//   response.send(`<!doctype html>
//   <html>
//     <head>
//       <meta charset="utf-8">
//       <title>Cat</title>
//       <link rel="stylesheet" href="/stylesheets/style.css" />
//     </head>
//     <body>
//       <h1>Cat</h1>
//       <p>This is my second route</p>
//       <img src="/images/pic.png" />
//     </body>
//   </html>
// `);
// });

// ...
// our first Route:

app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home-page.html")
);

// cat route:
app.get("/cat", (request, response, next) =>
  response.sendFile(__dirname + "/views/cat-page.html")
);
// ...

app.listen(3000, () => {
  console.log("listening on port 3000");
});
