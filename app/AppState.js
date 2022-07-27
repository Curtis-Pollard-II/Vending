import { Leaf } from "./Models/Leaf.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  
  
  leaves = [
    new Leaf('Mint', 10, 'C & D', '🍃'),
    new Leaf('Parsley', 8, 'A & K', '🌿'),
    new Leaf('Spinach', 7, 'C & K', '🌲'),
    new Leaf('Lettuce', 2, 'A & K', '🥬'),
    new Leaf('Curry', 8, 'A & L', '🍂'),
    new Leaf('Big Leaf Maple', 12, 'w & x', '🍁'),
  ]

  wallet = 0
  
}






export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
