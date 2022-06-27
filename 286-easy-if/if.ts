type If<C extends boolean, T, F> = C extends true ? T : F

//js
function fncIf(c, t, f) {
  return c ? t : f
}
