// 关键词：
// - typeof: 将 js 的值转为 ts 的类型
// - [number]: 用于获取数组的每一个项的值，keyof 只能获取索引
type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P;
};
