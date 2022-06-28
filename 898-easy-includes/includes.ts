// type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
//   ? 1
//   : 2
//   ? true
//   : false

import { Equal } from '@type-challenges/utils'
export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false


  //js
  function includes(list,key){
    for(let i = 0;i<list.length;i++){
      const el = list[i]
      if(el === key){
        return true
      }
    }
    return false
  }