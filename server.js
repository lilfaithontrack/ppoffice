const express = require("express");
const next = require("next");
const compression = require("compression");

const port = process.env.PORT || 8000;
const hostname = "0.0.0.0";
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Apply Gzip compression
  server.use(compression());

  // Let Next.js handle the routing
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, hostname, () => {
    console.log(`> Server running on http://${hostname}:${port} as ${dev ? "development" : "production"}`);
  });
});
