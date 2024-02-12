export interface ControllerInterface<T> {
    handle(props?: T): unknown;
}
  