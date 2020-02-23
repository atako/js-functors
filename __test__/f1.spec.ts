import { maybe } from '../src/index'

describe('init test ', () => {
  test('first', () => {
    maybe(5)()(console.log)
    maybe(5)(x => ++x)(console.log)
    maybe(5)(x => x * 2)(console.log)
  })
})
