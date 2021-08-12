module.exports = {
  globals: {
    'vue-jest': {
      resources: {
        scss: [
          './src/styles/settings/breakpoints.scss',
          './src/styles/settings/colors.scss',
          './src/styles/settings/unit.scss',
        ],
      },
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.spec.ts'],
}
