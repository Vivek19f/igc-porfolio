import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo} alt="" className="logo-img" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Indore Gujrat Carrier</h1>
        <p>
          Fleet Owners and Contractors
          <br />
          Door to Door Time Bond Services
          {/* Fleet Owners <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license. */}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('aboutus')
            }}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('clients')
            }}
          >
            Our Clients
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('team')
            }}
          >
            Our Team
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
