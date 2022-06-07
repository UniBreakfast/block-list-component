export {verifyItem}

function verifyItem(creature, li) {
  const {id, description} = creature

  return li.tagName === 'LI' &&
    li.dataset.id === id &&
    li.innerText === description &&
    li.classList.contains('item')
}
