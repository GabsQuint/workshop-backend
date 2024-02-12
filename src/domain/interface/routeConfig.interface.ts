export interface RouteConfigInterface {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  controller: any;
}
