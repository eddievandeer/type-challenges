// TS 中也可以使用 ... 进行解构
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
