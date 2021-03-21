export function nestedEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  let obj1Type;
  if (obj1 && obj2 && (obj1Type = obj1.constructor) === obj2.constructor) {
    let l, i;
    if (obj1Type === Array) {
      l = obj1.length;
      i = 0;
      if (l !== obj2.length) return false;
      for (; i < l; i++) {
        if (!nestedEqual(obj1[i], obj2[i])) return false;
      }
      return true;
    }
    i = Object;
    if (obj1Type === i) {
      if (i.keys(obj1).length !== (l = i.keys(obj2)).length) return false;
      for (obj1Type in obj1) {
        if (
          !(
            l.indexOf(obj1Type) !== -1 &&
            nestedEqual(obj1[obj1Type], obj2[obj1Type])
          )
        ) {
          return false;
        }
      }
      return true;
    }
  }
  return obj1 !== obj1 && obj2 !== obj2;
}
