export interface RouteConfigInterface<T> {
    method: 'get' | 'post' | 'put' | 'delete';
    url: string;
    controller: any
}
  
export interface HttpRouterInterface {
  init(): void;
}
  
export interface HttpServerInterface {
  on(method: string, url: string, callback: Function): void;
  listen(port: number): void;
}
  
export interface HttpResponseInterface {
  statusCode: number;
  response: any;
  message?: string;
}
  