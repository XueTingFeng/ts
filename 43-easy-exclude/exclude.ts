type MyExclude<T, U> = T extends U ? never : T

type t2 = "a" | "b" | "c"
type t3 = "a"
type t1 = MyExclude<t2, t3>

//js

//[a,b,c]
//[a]
function myExclude(T, U: any[]) {
  const res = []
  for (let i = 0; i < T.length; i++) {
    const t = T[i]
    // let boo = false

    // for (let j = 0; j < U.length; j++) {
    //   const u = U[j]

    //   if (t === u) {
    //     boo = true
    //   }
    // }

    // if (!boo) {
    //   res.push(t)
    // }

    if (!U.includes(t)) {
      res.push(t)
    }
  }

  return res
}
