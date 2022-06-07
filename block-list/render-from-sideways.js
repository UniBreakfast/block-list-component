export { renderSlideFromSideways }

async function renderSlideFromSideways() {
  if (!this.el) this.parent.replaceChildren(this.build())

  this.busy = true

  const newItems = [...this.items]
  const listItems = [...this.el.children]
  const obsoleteItems = [], queue = []

  listItems.forEach((li, pos) => {
    const i = this.items.findIndex(
      item => item.id === li.dataset.id && this.verifyFn(item, li)
    )

    if (i === -1) {
      obsoleteItems.push(li)
    } else {
      if (pos >= this.items.length) queue[pos] = li

      newItems.splice(i, 1)
    }
  })

  const newListItems = newItems.map(this.buildFn, this)

}









/*
    await Promise.all(listItems.map((li, i) => new Promise(resolve => {
    li.style.transition = '800ms'

    setTimeout(() => {
      li.style.transform = i % 2 ? 'translateX(100vw)' : 'translateX(-100vw)'
    }, i * 100)

    li.ontransitionend = resolve
  })))

    this.el.replaceChildren()
    this.busy = false
}
 */
