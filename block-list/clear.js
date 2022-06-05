export {clear}

function clear() {
  this.items = []

  if (this.el) this.el.replaceChildren()
}
