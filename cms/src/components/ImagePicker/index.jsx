import React from 'react'

import fetcher from '../../fetcher'

export default class ImagePicker extends React.Component {
  constructor() {
    super()
    this.apiImagesUrl = `${process.env.CMS_API_PROTO}://${process.env.CMS_API_HOST}:${process.env.CMS_API_PORT}${process.env.CMS_API_ROOT}/images`
  }
  getImages() {
    fetcher.get(this.apiImagesUrl).then(({message}) => {
      console.log(message)
    })
  }
  setImages(images) {
    fetcher.post(this.apiImagesUrl, images ? JSON.stringify(images) : null).then(({message}) => {
      console.log(message)
    })
  }
  test(event) {
    this.setImages(['1.jpg', '2.jpg'])
  }
  render() {
    return (
      <div>
        <p>ImagePicker</p>
        <button onClick={this.getImages.bind(this)}>get</button>
        <button onClick={this.test.bind(this)}>post</button>
      </div>
    )
  }
}
