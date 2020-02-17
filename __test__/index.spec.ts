import { Identity } from '../src/index'

describe('init test ', () => {
  test('first', () => {
    const trace = x => {
      console.log(x)
      return x
    }
    const u = Identity(2)
    const r1 = u
    r1 //?
    const r2 = u.map(x => x)
    r2 //?

    const f = n => n + 1
    const g = n => n * 2
    const r3 = u.map(x => f(g(x)))
    r3 //?

    const r4 = u.map(g).map(f)

    r3.map(trace)
    r4.map(trace)
  })
})
