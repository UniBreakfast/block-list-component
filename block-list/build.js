export {build}

function build() {
  if (this.el) return

  const ul = document.createElement('ul')

  ul.classList.add('block-list')
  this.el = ul

  return ul
}
