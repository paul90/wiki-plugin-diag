# build time tests for diag plugin
# see http://mochajs.org/

diag = require '../client/diag'
expect = require 'expect.js'

describe 'diag plugin', ->

  describe 'expand', ->

    it 'can make itallic', ->
      result = diag.expand 'hello *world*'
      expect(result).to.be 'hello <i>world</i>'
