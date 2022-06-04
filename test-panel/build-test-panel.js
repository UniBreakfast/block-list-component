export {buildTestPanel}

import {buildOption} from './build-option.js'
import {options} from './test-options.js'
import {prepOptionHandlers} from './prep-option-handlers.js'

function buildTestPanel(blockList) {
  const optionHandlers = prepOptionHandlers(blockList)
  const div = document.createElement('div')

  div.innerHTML = `
    <select name="" id="testSelect">
      ${options.map(buildOption).join('')}
    </select>

    <button id="doBtn">Do selected action</button>
  `
  div.id = 'testPanel'

  const {testSelect, doBtn} = div.children

  doBtn.onclick = () => optionHandlers[testSelect.value]()

  return div
}
