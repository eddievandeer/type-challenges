// 需要注意的点：
// - infer 要和 extends 结合使用
// - infer 可在函数参数及返回值中使用
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never;
