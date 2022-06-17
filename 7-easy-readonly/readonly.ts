type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

function readonly(obj) {
  const res = {}

  for (const key in obj) {
    res["readoonly" + key] = obj[key]
  }

  return res
}

//返回对象
//遍历
//加上关键字
//通过key获取值
