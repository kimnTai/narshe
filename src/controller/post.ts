import { createServer, type RequestListener } from "http";

const postController: RequestListener = (req, res) => {
  res.writeHead(200);
  res.end("raw node server!~");
};
