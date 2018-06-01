import mock from './mock.js'
import extendNative from './native.js'

let Keyboard = window.Keyboard

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  Keyboard = window.Keyboard = {}
  mock(Keyboard)
}

if (process.env.NODE_ENV === 'production') {
  if (!Keyboard) {
    throw new Error("[@mamba/native] 'Keyboard' module not found")
  }
  extendNative(Keyboard)
}

export default Keyboard
