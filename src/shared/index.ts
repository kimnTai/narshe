import type { IncomingMessage, ServerResponse } from "http";

const HEADERS = {
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, Content-Length, X-Requested-With",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "PATCH, POST, GET,OPTIONS,DELETE",
  "Content-Type": "application/json",
};

export class Response {
  constructor(protected res: ServerResponse) {}

  async init() {
    return this;
  }

  success(result: any) {
    this.res.writeHead(200, HEADERS);
    this.res.write(JSON.stringify({ status: "success", result }));
    this.res.end();
  }

  error(message: string) {
    this.res.writeHead(400, HEADERS);
    this.res.write(JSON.stringify({ status: "error", message }));
    this.res.end();
  }
}

export class Request {
  public body = "";
  public id = "";
  public method?: string;

  constructor(public req: IncomingMessage) {}

  async init() {
    this.id = this.req.url!.split("/").pop() || "";
    this.method = this.req.method;

    this.req.on("data", (chunk) => {
      this.body += chunk;
    });
    await new Promise((resolve) => this.req.on("end", resolve));

    return this;
  }
}
