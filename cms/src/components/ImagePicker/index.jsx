import React from 'react'

export default class ImagePicker extends React.Component {
  constructor() {
    super()
    this.xhr = new XMLHttpRequest()
    this.xhr.onreadystatechange = this.onreadystatechange
    this.xhr.open('POST', `${process.env.CMS_API_PROTO}://${process.env.CMS_API_HOST}:${process.env.CMS_API_PORT}${process.env.CMS_API_ROOT}/images`, true)
  }
  onreadystatechange() {
    console.log(this)
  }
  render() {
    return (
      <p>ImagePicker</p>
    )
  }
}
