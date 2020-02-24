// import * as pipe from 'lodash/fp/pipe'

const withConstructor = constructor => o => ({
  __proto__: {
    constructor,
  },
  ...o,
})

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const withFlying = o => {
  let isFlying = false
  return {
    ...o,
    fly() {
      isFlying = true
      return this
    },
    land() {
      isFlying = false
      return this
    },
    isFlying: () => isFlying,
  }
}

const withBattery = ({ capacity }) => o => {
  let percentCharged = 100
  return {
    ...o,
    draw(percent) {
      const remaining = percentCharged - percent
      percentCharged = remaining > 0 ? remaining : 0
      return this
    },
    getCharge: () => percentCharged,
    getCapacity() {
      return capacity
    },
  }
}

const createDrone = ({ capacity = '3000mAh' }) =>
  pipe(withFlying, withBattery({ capacity }), withConstructor(createDrone))({})

export const myDrone = createDrone({ capacity: '5500mAh' })
