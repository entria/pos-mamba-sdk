import mock from './mock.js'
import addSharedTo from './shared.js'

let Transaction = window.MbTransaction

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  Transaction = window.MbTransaction = {}
  addSharedTo(Transaction)
  mock(Transaction)
}

if (process.env.NODE_ENV === 'production') {
  if (!Transaction) {
    throw new Error("[@mamba/native] 'Transaction' module not found")
  }
  addSharedTo(Transaction)
}

export default Transaction
