import type { Equal, Expect } from "@type-challenges/utils"

const tuple = ["tesla", "model 3", "model X", "model Y"] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, "2", 3, "4"] as const

// let str = "123"
// type s = typeof str

// const strConst = "111111"
//type sc = typeof strConst

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla"
        "model 3": "model 3"
        "model X": "model X"
        "model Y": "model Y"
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
]

//这个注释希望下面语句报错
// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

//typeof 将js转换为ts类型
