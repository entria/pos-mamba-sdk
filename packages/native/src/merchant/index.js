import mock from './mock.js'
import extendNative from './native.js'

let Merchant = window.MbMerchant

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  Merchant = window.MbMerchant = {}
  mock(Merchant)
}

if (process.env.NODE_ENV === 'production') {
  if (!Merchant) {
    throw new Error("[@mamba/native] 'Merchant' module not found")
  }
  extendNative(Merchant)
}

export default Merchant
