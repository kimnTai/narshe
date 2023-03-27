import { createServer, type RequestListener } from "http";
import "@/env";
import "@/connection";
import { Request, Response } from "./shared";
import EventEmitter from "events";

export const eventEmitter = new EventEmitter();

const requestListener: RequestListener = async (req, res) => {
  const [request, response] = await Promise.all([
    new Request(req).init(),
    new Response(res).init(),
  ]);

  eventEmitter.emit("requestTrigger", request, response);

  if (req.url === "/") {
    response.success("Hello Narshe");
    return;
  }
  if (req.url?.startsWith("/post")) {
    response.success("Hello post");
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
