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


}
