'use strict'

const crypto = use('crypto')
const Helpers = use('Helpers')

/**
 * Generate random string
 *
 * @param {int} length - Tamanho da string que será gerada
 * @return {string} uma string aleatória do tamanho do length
 */

const str_random = async (length = 40) => {
  let string = ''
  const len = string.length

  if (len < length) {
    const size = length - len
    const bytes = await crypto.randomBytes(size)
    const buffer = Buffer.from(bytes)
    string += buffer
      .toString('base64')
      .replace(/[^a-zA-Z0-9]/g, '')
      .substr(0, size)
  }
  return string
}

module.exports = {
  str_random
}
