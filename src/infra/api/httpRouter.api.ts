import { HttpRouterInterface } from '../../domain/interface/httpRouter.interface';
import { HttpServerInterface } from '../../domain/interface/httpServer.interface';
import { RouteConfigInterface } from '../../domain/interface/server.interface';

export class HttpRouter implements HttpRouterInterface {
  private httpServerInstance: HttpServerInterface;

  constructor(httpServerInstance: HttpServerInterface) {
    this.httpServerInstance = httpServerInstance;
  }

  init(routes: RouteConfigInterface<unknown>[]): void {
    for (const route of routes) {
      this.httpServerInstance.on(route.method, route.url, async (params: any) => {
        const controller = route.controller;
        return await controller.handle(params);
      });
    }
  }
}
