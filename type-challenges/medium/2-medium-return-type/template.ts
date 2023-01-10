// 利用 infer 获取函数返回值的类型
type MyReturnType<T> = T extends (...args: any[]) => infer X ? X : never;
