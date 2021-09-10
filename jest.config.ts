module.exports = {
    automock: false,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 10000,
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.d.ts'
    ],
    reporters: ['default', 'jest-junit'],
    /* testPathIgnorePatterns: [
        '<rootDir>/src/handlers/',
        '<rootDir>/src/schemas/'
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/handlers/',
        '<rootDir>/src/schema/'
    ], */
    coverageReporters: ['lcov', 'text', 'cobertura'],
    coverageThreshold: {
        global: {
            // branches: 70,
            functions: 10
            // lines: 70,
        }
    }
};
