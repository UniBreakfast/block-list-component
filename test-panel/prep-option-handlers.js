export { prepOptionHandlers }

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
    },

    addThreeItems() {
      const creatures = [makeCreature(), makeCreature(), makeCreature()]

      blockList.add(...creatures)
    },

    insertThreeAt4() {
      const creatures = [makeCreature(), makeCreature(), makeCreature()]

      blockList.insertAt(4, ...creatures)
    },

    clear() {
      blockList.clear()
    },

    clearSlideSideways() {
      blockList.clearSlideSideways()
    },

    sortByFeature() {
      blockList.sort(({ item: item1 }, { item: item2 }) => {
        const feature1 = item1.description?.split(' ')[0]
        const feature2 = item2.description?.split(' ')[0]

        if (feature1 === feature2) return 0

        return feature1 < feature2 ? -1 : 1
      })
    },

    sortByCreature() {
      blockList.sort(({ item: item1 }, { item: item2 }) => {
        const type1 = item1.description?.split(' ')[1]
        const type2 = item2.description?.split(' ')[1]

        if (type1 === type2) return 0

        return type1 < type2 ? -1 : 1
      })
    },

    sortById() {
      blockList.sort(
        ({ item: item1 }, { item: item2 }) => item2.id % 2 - item1.id % 2
      )
    },

    sortByInnerTextLength() {
      blockList.sort(
        ({ el: el1 }, { el: el2 }) => el1.innerText.length - el2.innerText.length
      )
    },

    sortByInnerLength() {
      if (blockList.el) {
        [...blockList.el.children].forEach(el => {
          const span = document.createElement('span')

          span.append(...el.childNodes)
          el.append(span)
        })
      }

      blockList.sort(
        ({ el: el1 }, { el: el2 }) =>
          el1.firstElementChild.offsetWidth - el2.firstElementChild.offsetWidth
      )

      if (blockList.el) {
        [...blockList.el.children].forEach(el => {
          el.replaceChildren(...el.firstElementChild.childNodes)
        })
      }
    }
  }

  return optionHandlers
}
