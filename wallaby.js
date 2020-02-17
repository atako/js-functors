module.exports = wallaby => {
  return {
    files: ['/src/**/*.ts'],
    tests: ['/__test__/**/*.spec.ts'],

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'commonjs' }),
    },

    env: {
      type: 'node',
      runner: 'node',
      // params: {
      //   env: 'NODE_ENV=test',
      // },
      // runner: require('os').homedir() + '/.nvm/versions/node/v8.10.0/bin/node',
    },

    workers: {
      restart: true,
    },

    debug: true,
    testFramework: 'jest',
  }
}
