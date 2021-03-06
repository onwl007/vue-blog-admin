/**
 * @desc Qrcode
 */

'use strict'

import qrcode from 'qrcode'

export const toCanvas = (canvasElement, text, options = {}) => {
  return new Promise((resolve, reject) => {
    qrcode.toCanvas(canvasElement, text, options, err => {
      if (err) return reject(err)
      resolve()
    })
  })
}

export const toDataURL = (text, options = {}) => {
  return new Promise((resolve, reject) => {
    qrcode.toDataURL(text, options, (err, url) => {
      if (err) return reject(err)
      resolve(url)
    })
  })
}

export const toString = (text, options = {}) => {
  return new Promise((resolve, reject) => {
    qrcode.toDataURL(text, options, (err, string) => {
      if (err) return reject(err)
      resolve(string)
    })
  })
}
