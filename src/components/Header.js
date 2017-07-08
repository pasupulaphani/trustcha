import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  static defaultProps = {
  }

  render () {
    const styleLogo = {paddingLeft: '15px'}

    return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row" style={styleLogo}>
        <span className="mdl-layout-title"><Link to={'/'}>Proof of Donation Distribution</Link></span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <Link className="mdl-navigation__link" to={'/registraction'}>Registration</Link>
          <Link className="mdl-navigation__link" to={'/account'}>Account</Link>
          <Link className="mdl-navigation__link" to={'/marketplace'}>Marketplace</Link>
          <Link className="mdl-navigation__link" to={'/chat'}>Chat</Link>
          <Link className="mdl-navigation__link" to={'/contact'}>Contact</Link>
        </nav>
      </div>
    </header>
    )
  }

}

export default Header
