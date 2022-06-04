export {makeCreature}

import {genId} from './generate-id.js'
import {rnd} from './rnd.js'
import dataPack from './data.js'

const {features, creatures} = dataPack

function makeCreature() {
  const creature = {
    id: genId(),
    description: rnd(features, creatures)
  }

  return creature
}
