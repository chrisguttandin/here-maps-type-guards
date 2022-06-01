module.exports = {
    build: ['sh:clean', 'copy:namespace', 'replace:namespace', 'sh:build-es2019', 'sh:build-es5'],
    lint: ['sh:lint-config', 'sh:lint-src', 'sh:lint-test'],
    test: ['sh:test-unit']
};
