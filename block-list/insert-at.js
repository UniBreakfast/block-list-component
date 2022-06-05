export {insertAt}

insertAt(i, ...items) {
  this.items.splice(i, 0, ...items)

  if (this.el) for (const item of items) {
    this.el.insertBefore(this.buildFn(item), this.el.children[i++])
  }
}
