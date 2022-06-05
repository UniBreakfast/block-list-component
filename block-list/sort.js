export {sort}

function sort(compareFn) {
  const elements = [...this.el?.children || []]
  const arr = this.items.map(
    item => ({ item, el: elements.find(el => el.dataset.id === item.id) || {} })
  )
  const actualElements = arr.map(({ el }) => el)
  const restOfElements = elements.filter(el => !actualElements.includes(el))

  arr.push(...restOfElements.map(el => ({ item: {}, el })))
  arr.sort(compareFn)

  this.items = arr.map(({ item }) => item)
    .filter(item => Object.keys(item).length)

  this.el?.append(
    ...arr.map(({ el }) => el).filter(el => el instanceof HTMLElement)
  )
}
