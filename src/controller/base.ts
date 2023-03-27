import { eventEmitter } from "@/app";
import type { Response, Request } from "@/shared";

export default class BaseController {
  protected response!: Response;
  protected request!: Request;

  constructor() {
    eventEmitter.on("requestTrigger", (req: Request, res: Response) => {
      this.response = res;
      this.request = req;
    });
  }
}
