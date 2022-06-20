//type First<T extends any[]> = T extends [] ? never : T[0]

//type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

//type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never

type args = [1, 2, 3]
type t1 = args[number]
type t2 = 1 extends t1 ? "true" : "false"

//js
// const first = (arr) => {
//   if (arr.length === 0) return "never"

//   return arr[0]
// }

const first = (arr) => {
  const [first, ...rest] = arr
  return first ? first : "never"
}
