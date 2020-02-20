import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./methods";
import { MetaDataKeys } from "./MetaDataKeys";
import { Request, Response, RequestHandler, NextFunction } from "express";

export const router = AppRouter.getInstance();

function bodyValidators(keys: string[]): RequestHandler {
  return function(request: Request, response: Response, next: NextFunction) {
    if (!request.body) {
      response.status(422).send("Invalid Request");
      return;
    }

    for (let key of keys) {
      if (!request.body[key]) {
        response.status(422).send("Invalid Request");
        return;
      }
    }

    next();
  };
}

export function controller(basePath: string) {
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata("path", target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        MetaDataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetaDataKeys.middleware, target.prototype, key) ||
        [];
      console.log(middlewares);
      const requiredBodyProps = Reflect.getMetadata(
        MetaDataKeys.validator,
        target.prototype,
        key
      ) || [];
      if (path) {
        router[method](`${basePath}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
