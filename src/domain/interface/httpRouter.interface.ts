import { RouteConfigInterface } from './server.interface';

export interface HttpRouterInterface {
  init(routes: RouteConfigInterface<unknown>[]): void;
}
