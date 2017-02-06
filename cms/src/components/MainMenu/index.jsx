import React from 'react'
import TextFieldsIcon from 'material-ui/svg-icons/editor/text-fields'
import CollectionsIcon from 'material-ui/svg-icons/image/collections'

import SalottoLogoSvg from '../SalottoLogoSvg'
import Card from './Card'
import './styles.css'

export default class MainMenu extends React.Component {
  render() {
    return (
      <div id="mainmenu">

        <div id="mainmenu-logo-wrap">
          <SalottoLogoSvg />
          <p>Admin</p>
        </div>

        <div className="cards">
          <Card title="select background images" href="images" icon={CollectionsIcon} />
          <Card title="Edit text in about-section" href="about" icon={TextFieldsIcon} />
        </div>

      </div>
    )
  }
}
