export {prepOptionHandlers}

import { make30creatures } from '../make-creatures/make-30-creatures.js'
import { makeCreature } from '../make-creatures/make-a-creature.js'

function prepOptionHandlers(blockList) {
  const optionHandlers = {
    changeItems() {
      const creatures = make30creatures()

      blockList.have(creatures)
    },

    render() {
      blockList.render()
    },

    removeFirst() {
      const id = blockList.items?.[0]?.id

      if (id !== undefined) blockList.remove(id)
    },

    addItem() {
      const creature = makeCreature()

      blockList.add(creature)
    }
  }

  return optionHandlers
}
