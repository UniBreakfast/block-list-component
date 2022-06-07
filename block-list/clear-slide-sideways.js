export { clearSlideSideways }

async function clearSlideSideways() {
  this.items = []

  if (this.el) {
    this.busy = true

    const listItems = [...this.el.children]

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
}
