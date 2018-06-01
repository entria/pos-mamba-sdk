import GifMock from './mock.js'

let Gif = window.Gif

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  Gif = window.Gif = new GifMock()
}

if (process.env.NODE_ENV === 'production') {
  if (!Gif) {
    throw new Error("[@mamba/native] 'Gif' module not found")
  }
}

export default Gif
