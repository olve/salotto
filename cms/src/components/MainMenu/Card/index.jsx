import React from 'react'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router'

import './styles.css'

export default class Card extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    icon: React.PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className="mainmenu-card">


        <Link to={this.props.href}>


          <Paper zDepth={1} className="paper">


            <div className="svg-wrap">
              <this.props.icon className="icon" />
            </div>

            <h3>{this.props.title}</h3>


          </Paper>


        </Link>


      </div>
    )
  }
}
