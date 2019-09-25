const assert = require('assert');
describe('webapck.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base');
    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexOf('travis-test/test/smoke/template/src/index/index.j') > -1, true)
        assert.equal(baseConfig.entry.search.indexOf('travis-test/test/smoke/template/src/search/index.j') > -1, true)
    })
})