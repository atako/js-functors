export const init = (a, c) => {
  return a + c
}

export const Identity = value => ({
  map: fn => Identity(fn(value)),
})

export const maybe = x => fn => maybe(x && fn ? fn(x) : null)
