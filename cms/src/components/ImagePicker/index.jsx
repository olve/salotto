import React from 'react'

import fetcher from '../../fetcher'

export default class ImagePicker extends React.Component {
  constructor() {
    super()
    this.apiImagesUrl = `${process.env.CMS_API_PROTO}://${process.env.CMS_API_HOST}:${process.env.CMS_API_PORT}${process.env.CMS_API_ROOT}/images`
    this.state = {
      images: ['1.jpg', '2.jpg']
    }
  }
  getImages() {
    fetcher.get(this.apiImagesUrl)
      .then(({message}) => {
        console.log(message)
      })
  }
  setImages() {
    const headers = {'Accept': 'application/json', 'Content-Type': 'application/json; charset=UTF-8'}

    fetcher.post(this.apiImagesUrl, {images: this.state.images}, headers)
      .then(({message}) => {
        console.log(message)
      })

  }
  render() {
    return (
      <div>
        <p>ImagePicker</p>
        <button onClick={this.getImages.bind(this)}>get</button>
        <button onClick={this.setImages.bind(this)}>post</button>
      </div>
    )
  }
}
