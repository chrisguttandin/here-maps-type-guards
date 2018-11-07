const { join } = require('path');

module.exports = {
    namespace: {
        files: [
            {
                cwd: 'node_modules/@types/heremaps',
                dest: 'src/namespace',
                expand: true,
                rename: (dest) => join(dest, 'namespace.ts'),
                src: [ 'index.d.ts' ]
            }
        ]
    }
};
