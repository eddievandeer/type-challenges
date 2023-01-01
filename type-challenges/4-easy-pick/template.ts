// extends:
// - 可以说是添加一个类型约束，让 K 只能是被继承的目标的类型
// - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
// keyof:
// - 获取目标类型的所有 keys，并以 union 联合类型的形式返回
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
type MyPick<T, K extends keyof T> = {
  // 相当于 js 的对象属性拷贝
  [P in K]: T[P];
};
