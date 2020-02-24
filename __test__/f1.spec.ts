import { maybe } from '../src/index'
import { Particle } from '../src/prototype'

describe('init test ', () => {
  test('first', () => {
    maybe(5)()(console.log)
    maybe(5)(x => ++x)(console.log)
    maybe(5)(x => x * 2)(console.log)
  })

  test('second', () => {
    const p = new Particle()
    Particle.prototype.b = 3
    Particle.prototype.c = 4
    p.c //?
  })
})
