import { diag } from '../src/client/diag.js'
import { suite, test } from 'node:test'
import assert from 'node:assert'

suite('diag plugin', () => {
  suite('expand', () => {
    test('can escape html markup characters', () => {
      const result = diag.expand('try < & >')
      assert.equal(result, 'try &lt; &amp; &gt;')
    })
  })
})
