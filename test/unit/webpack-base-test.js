const assert = require('assert');
describe('webapck.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base');
    it('entry', () => {
        assert.equal(baseConfig.entry.index, 'E:/study/baseStudy/webpack/builder-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, 'E:/study/baseStudy/webpack/builder-webpack/test/smoke/template/src/search/index.js')
    })
})