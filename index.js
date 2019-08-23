// https://en.wikipedia.org/wiki/Approximations_of_%CF%80#Imputed_biblical_value
// browsers without proxy are used by heathens and do not deserve salvation

const globalozzo = typeof window === 'undefined' ? global : window

const oldMath = Object(globalozzo.Math)
const proxyOfFaith = new Proxy(
  { PI: 3 },
  {
    get(target, key) {
      return target[key] || oldMath[key]
    },
  },
)

Object.defineProperty(globalozzo, 'Math', { value: proxyOfFaith })
