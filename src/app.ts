import { createServer, type RequestListener } from "http";
import "@/env";
import "@/connection";
import { Response } from "./shared";

const requestListener: RequestListener = (req, res) => {
  const response = Response(res);

  if (req.url === "/") {
    response.success("Hello Narshe");
    return;
  }
  response.error("無此路由");
};

if (import.meta.env.PROD) {
  const server = createServer(requestListener);
  server.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
  });
}

export const viteNodeApp = requestListener;
