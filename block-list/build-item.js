export {buildItem}

function buildItem(creature) {
  const {id, description} = creature
  const li = document.createElement('li')

  li.dataset.id = id
  li.innerText = description
  li.classList.add('item')

  return li
}
