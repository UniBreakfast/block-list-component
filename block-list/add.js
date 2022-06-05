export {add}

function add(...items) {
  this.items.push(...items)

  if (this.el) this.el.append(...items.map(item => this.buildFn(item)))
}
