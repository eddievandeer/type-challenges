// PromiseLike: 有实现一个then方法的对象都可以被视为 PromiseLike
// infer：可以理解为设置一个变量，只能在 extends 子句中使用
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer X>
  ? X extends PromiseLike<unknown>
    ? MyAwaited<X>
    : X
  : T;
