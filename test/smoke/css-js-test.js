const globAll = require('glob-all');
describe('Checking generated css js files', () => {
    it('should generate css js files', (done) => {
        const files = globAll.sync([
            './dist/static/js/index_*.js',
            './dist/static/js/index_*.css',
            './dist/static/js/search_*.js',
            './dist/static/js/search_*.css',
        ])
        if (files.length > 0) {
            done();
        } else {
            throw new Error('no css js files generated')
        }
    });
});
