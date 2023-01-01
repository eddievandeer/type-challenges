// 关键字：Mapped Types、lookup
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
