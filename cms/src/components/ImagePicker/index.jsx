import React from 'react'

export default class ImagePicker extends React.Component {
  constructor() {
    super()
    this.apiImagesUrl = `${process.env.CMS_API_PROTO}://${process.env.CMS_API_HOST}:${process.env.CMS_API_PORT}${process.env.CMS_API_ROOT}/images`
  }
  get() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert(xhr.responseText)
      }
    }
    xhr.open('GET', this.apiImagesUrl, true)
    xhr.send()
  }
  post() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert(xhr.responseText)
      }
    }
    xhr.open('POST', this.apiImagesUrl, true)
    xhr.send()
  }
  render() {
    return (
      <div>
        <p>ImagePicker</p>
        <button onClick={this.get.bind(this)}>get</button>
        <button onClick={this.post.bind(this)}>post</button>
      </div>
    )
  }
}
