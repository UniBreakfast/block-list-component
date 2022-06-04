export { make30creatures }

import { genId } from './generate-id.js'
import { makeArr } from './make-arr.js'
import { rnd } from './rnd.js'
import dataPack from './data.js'

const { features, creatures } = dataPack

function make30creatures() {
  const descriptions = makeArr(30, () => rnd(features, creatures), true, true)

  return descriptions.map(description => ({id: genId(), description}))
}
