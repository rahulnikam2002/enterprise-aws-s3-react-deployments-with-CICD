module.exports = {
    testEnvironment: "jsdom",

    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.test.json",
            },
        ],
    },

    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],

    setupFilesAfterEnv: [
        "<rootDir>/src/test/setup.ts"
    ],

    collectCoverage: true,

    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },

    coverageDirectory: "coverage",

    coverageReporters: [
        "text",
        "lcov",
        "html"
    ]
};