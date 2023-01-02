// 涉及的知识点：
// - union extends union 会发生什么
// - never 空集
// 个人理解：
// - extends 在处理 union 类型时，会遍历地去对比每一个项
// - 两边都有的则返回三目运算中的前一个，没有的则返回后一个
type MyExclude<T, U> = T extends U ? never : T