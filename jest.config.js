const config = {
  roots: ['.', './test'],
  verbose: true,
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/test/config/assetTransformer.js',
    '^<src>/(.*)$': '<rootDir>/src/$1',
    '^<pages>/(.*)$': '<rootDir>/src/components/pages/$1',
    '^<api>/(.*)$': '<rootDir>/src/api/$1',
    '^<components>/(.*)$': '<rootDir>/src/components/$1',
    '^<atoms>/(.*)$': '<rootDir>/src/components/ui/atoms/$1',
    '^<molecules>/(.*)$': '<rootDir>/src/components/ui/molecules/$1',
    '^<organisms>/(.*)$': '<rootDir>/src/components/ui/organisms/$1',
    '^<context>/(.*)$': '<rootDir>/src/context/$1',
    '^<routes>/(.*)$': '<rootDir>/src/routes/$1',
    '^<styles>/(.*)$': '<rootDir>/src/styles/$1',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/test/config/assetTransformer.js',
    '<rootDir>/(build|dist|docs|node_modules)/',
  ],
  coverageReporters: [
    'json-summary',
    'text',
    'lcov',
  ],
};

module.exports = config;
