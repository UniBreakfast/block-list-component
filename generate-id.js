export {genId}

let lastId = 0

function genId() {
  return String(++lastId)
}
