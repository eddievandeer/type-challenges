// 这是 @type-challenges/utils 包里的工具函数的写法
// 这里之所以这么写，是因为有很多需要注意的点
// 可参考：https://github.com/type-challenges/type-challenges/issues/21457
type IsEqual<X, Y> = (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X
  ? 1
  : 2
  ? true
  : false;

// 递归的去对比每一项
// 每一轮递归时，只取第一项 First 并对比 First 和 U
// 若 First 和 U 不相等，继续用 Rest 去递归
type Includes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
