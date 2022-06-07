export { BlockList }

import { BlockList } from "./block-list-class.js"

import { prepDescriptors } from "../prep-descriptors.js"

import { build } from "./build.js"
import { add } from "./add.js"
import { remove } from "./remove.js"
import { insertAt } from "./insert-at.js"
import { clear } from "./clear.js"
import { clearSlideSideways } from "./clear-slide-sideways.js"
import { sort } from "./sort.js"
import { renderSlideFromSideways } from "./render-from-sideways.js"

Object.defineProperties(BlockList.prototype, prepDescriptors(
  {
    build, add, remove, insertAt, clear, sort,
    clearSlideSideways, renderSlideFromSideways,
  }
))
