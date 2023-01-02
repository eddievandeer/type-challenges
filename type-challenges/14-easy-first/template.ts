// 当传入的是空数组时，第一项会是 undefined 而不是 never
// 方法一
type First<T extends any[]> = T extends [] ? never : T[0];

// 方法二
type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 方法三
type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 方法四: infer
type First4<T extends any[]> = T extends [infer First4, ...infer Rest]
  ? First4
  : never;
