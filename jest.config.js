module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  }

};
