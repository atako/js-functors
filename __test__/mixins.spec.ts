import { myDrone } from '../src/mixins'

describe('init test ', () => {
  myDrone //?
  myDrone.fly().isFlying() //?
  myDrone.land().isFlying() //?
  myDrone.getCapacity() //?
  myDrone.draw(50).getCharge() //?
  myDrone.draw(75).getCharge() //?
  myDrone.constructor //?
})
