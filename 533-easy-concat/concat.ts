type Concat<T extends any[], U extends any[]> = [...T, ...U]

//js
function concatArr(t, u) {
  if (Array.isArray(t) && Array.isArray(u)) {
    return [...t, ...u]
  }
}
