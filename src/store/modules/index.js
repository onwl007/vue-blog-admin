/**
 * @desc Store modules entry
 */

'use strict'

import * as app from './app'
import * as auth from './auth'
import * as article from './article'
import * as category from './category'
import * as tag from './tag'
import * as option from './option'

export default {
  app: { namespaced: true, ...app },
  auth: { namespaced: true, ...auth },
  article: { namespaced: true, ...article },
  category: { namespaced: true, ...category },
  tag: { namespaced: true, ...tag },
  option: { namespaced: true, ...option }
}
