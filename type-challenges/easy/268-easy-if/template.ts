// 知识点：
// - Type Compatibility: https://www.typescriptlang.org/docs/handbook/type-compatibility.html#handbook-content
type If<C extends boolean, T, F> = C extends true ? T : F;
