import { make30creatures } from './make-creatures/make-30-creatures.js'
import { BlockList } from './block-list/block-list.js'
import { buildItem } from './block-list/build-item.js'
import { buildTestPanel } from './test-panel/build-test-panel.js'
import { expose } from './expose.js'

const creatures = make30creatures()

// console.log(creatures)

const blockList = new BlockList
const panel = buildTestPanel(blockList)
const wrapper = document.getElementById('wrapper')

wrapper.insertAdjacentElement('afterend', panel)

blockList.settleAt(wrapper)
blockList.have(creatures)
blockList.use(buildItem)
blockList.render()

expose({ blockList })
