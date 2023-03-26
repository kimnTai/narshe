import type { ServerResponse } from "http";

export const Response = (res: ServerResponse) => {
  const headers = {
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PATCH, POST, GET,OPTIONS,DELETE",
    "Content-Type": "application/json",
  };

  const success = (result: any) => {
    res.writeHead(200, headers);
    res.write(JSON.stringify({ status: "success", result }));
    res.end();
  };

  const error = (message: string) => {
    res.writeHead(400, headers);
    res.write(JSON.stringify({ status: "error", message }));
    res.end();
  };

  return {
    success,
    error,
  };
};
