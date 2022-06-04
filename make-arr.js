export {makeArr}

function makeArr(length, func, distinct, persist) {
  if (distinct) {
    const max = persist ? Infinity : 100000
    const set = new Set()

    for (let i = 0;  set.size < length && i < max;  i++) {
      const nextResult = func()
      const size = set.size

      if (nextResult === undefined) continue

      set.add(nextResult)

      if (size < set.size) i = 0
    }
    return Array.from(set)
  }

  return Array(length).fill(0).map( () => {
    let nextResult = func()

    while (nextResult == undefined) nextResult = func()

    return nextResult
  } )
}
