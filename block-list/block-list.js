export class BlockList {
  items = []

  settleAt(parent) {
    this.parent = parent
  }

  have(items) {
    this.items = items
  }

  use(buildFn) {
    this.buildFn = buildFn
  }

  render() {
    if (!this.el) this.parent.replaceChildren(this.build())

    this.el.replaceChildren(...this.items.map(this.buildFn))
  }

  build() {
    if (this.el) return

    const ul = document.createElement('ul')

    ul.classList.add('block-list')
    this.el = ul

    return ul
  }

  remove(id) {
    this.el?.querySelector(`[data-id="${id}"]`)?.remove()

    const i = this.items.findIndex(item => item.id === id)

    if (~i) this.items.splice(i, 1)
  }
}
