export {remove}

function remove(...ids) {
  for (const id of ids) {
    this.el?.querySelector(`[data-id="${id}"]`)?.remove()

    const i = this.items.findIndex(item => item.id === id)

    if (~i) this.items.splice(i, 1)
  }
}
