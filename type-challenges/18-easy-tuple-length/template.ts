// 什么是tuple
// - https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// - 个人理解：定长的一个数组，但并非是一个数组值，而是一个数组常量类型
// - 举例：[string, string]，这就是一个长度为2的tuple
type Length<T extends readonly any[]> = T["length"];
