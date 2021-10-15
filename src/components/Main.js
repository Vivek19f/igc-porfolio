import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.png'
import pic02 from '../images/pic01.png'
import pic03 from '../images/pic01.png'
import almonard from '../images/Client-logos/Almonard-logo.png'
import amaraRaja from '../images/Client-logos/amara-raja.png'
import argroup from '../images/Client-logos/argroup_white.png'
import eveready from '../images/Client-logos/Eveready.png'
import exide from '../images/Client-logos/exide.jpg'
import helios from '../images/Client-logos/Helios.png'
import lincoln from '../images/Client-logos/lincoln.png'
import nichono from '../images/Client-logos/Nichino.png'
import nissin from '../images/Client-logos/Nissin.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="aboutus"
          className={`${this.props.article === 'aboutus' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Us</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="clients"
          className={`${this.props.article === 'clients' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Clients</h2>
          <div className="clients-grids">
            <img src={almonard} alt="" />
            <img src={amaraRaja} alt="" />
            <img src={argroup} alt="" />
            <img src={eveready} alt="" />
            <img src={argroup} alt="" />
            <img src={exide} alt="" />
            <img src={helios} alt="" />
            <img src={lincoln} alt="" />
            <img src={nichono} alt="" />
            <img src={nissin} alt="" />
          </div>

          {close}
        </article>

        <article
          id="team"
          className={`${this.props.article === 'team' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Team</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Us</h2>
          <div className="address">
            <h3>Indore Office</h3>
            <ul>
              <li>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <small>
                  Godown No 22, Roshan Compound, Dewas Naka,
                  <br /> Indore, Madhaya Pradesh
                </small>
              </li>

              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <small>0731-4048469</small>
              </li>
              <li>
                <i class="fa fa-mobile" aria-hidden="true"></i>
                <small>+91-9303444449</small>
              </li>
              <li>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <small>igcindore808@gmail.com</small>
              </li>
            </ul>
          </div>
          <div className="address">
            <h3>Ahmedabad Office</h3>
            <ul>
              <li>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <small>
                  Godown No 4, Gopinath Estate near Sardarji ka Dhaba, NH8
                  <br /> Aslali Bypass, Aslali, Ahmedabad, Gujrat
                </small>
              </li>

              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <small>079-29708750</small>
              </li>
              <li>
                <i class="fa fa-mobile" aria-hidden="true"></i>
                <small>+91-9303444449</small>
              </li>
              <li>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <small>igcahmedabad808@gmail.com</small>
              </li>
            </ul>
          </div>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
