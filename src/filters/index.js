/**
 * @desc Vue filters
 */

'use strict'

import Vue from 'vue'
import { fmtDate } from '@/utils'

const filters = {
  fmtDate
}

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
