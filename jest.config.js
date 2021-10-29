// jest.config.js

module.exports = {
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: ["node_modules/(?!(sucrase)/)"],
  moduleNameMapper: {
    "@mesalva/uikit": ["<rootDir>/lib/uikit"],
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest",
  },
  setupFiles: ["<rootDir>/__mocks__/setup.js"],
  bail: 1,
  verbose: true,
  coverageThreshold: {
    global: {
      statements: 36,
    },
  },
};
