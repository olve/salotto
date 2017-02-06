import React from 'react'
import { Link } from 'react-router'

export default class MainMenu extends React.Component {
  render() {
    return (
      <div>
      <p>Main menu</p>
      <Link to="images">images</Link>
      </div>
    )
  }
}
