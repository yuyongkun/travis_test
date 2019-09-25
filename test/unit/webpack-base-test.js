const assert = require('assert');
describe('webapck.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base');
    it('entry', () => {
        console.log('------------test------------')
        console.log(baseConfig.entry.index)
        console.log(baseConfig.entry.index.indexOf('travis-test/test/smoke/template/src/index/index.js') > -1)
        assert.equal(baseConfig.entry.index.indexOf('travis-test/test/smoke/template/src/index/index.js') > -1, true)
        assert.equal(baseConfig.entry.search.indexOf('travis-test/test/smoke/template/src/search/index.js') > -1, true)
    })
})