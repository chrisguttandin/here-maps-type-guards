module.exports = {
    namespace: {
        files: {
            'src/namespace/namespace.ts': [
                'src/namespace/namespace.ts'
            ]
        },
        options: {
            patterns: [
                {
                    match: /(.*)/s,
                    replacement: (match) => `/* tslint:disable */\n${ match }`
                },
                {
                    match: /declare\snamespace\sH\s{/s,
                    replacement: 'export declare namespace H {'
                }
            ]
        }
    }
};
