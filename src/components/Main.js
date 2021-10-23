import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.png'

// services
import door from '../images/doortodoor.png'
import fulload from '../images/fulload.jpeg'
import parcel from '../images/parcel.jpeg'
import timebond from '../images/timebond.jpg'
// Clients
import almonard from '../images/Client-logos/Almonard-logo.png'
import amaraRaja from '../images/Client-logos/amara-raja.png'
import argroup from '../images/Client-logos/argroup_white.png'
import eveready from '../images/Client-logos/Eveready.png'
import exide from '../images/Client-logos/exide.jpg'
import helios from '../images/Client-logos/Helios.png'
import lincoln from '../images/Client-logos/lincoln.png'
import nichono from '../images/Client-logos/Nichino.png'
import nissin from '../images/Client-logos/Nissin.png'
import leolife from '../images/Client-logos/leolife.jpg'
import meditek from '../images/Client-logos/meditek.jpg'
import gujratterce from '../images/Client-logos/gujratterce.png'
import alloes from '../images/Client-logos/alloes.png'
import accord from '../images/Client-logos/accord.jpg'
import sumitomo from '../images/Client-logos/sumitomo.jpg'
import sudarshan from '../images/Client-logos/sudarshan.png'
import crest from '../images/Client-logos/crest.png'

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
            Indore Gujrat Road Carrier Company is a leading name in providing
            reliable Transportation Services. Established in Indore under the
            able leadership of <u>"Mr. Hari Singh Jhooria"</u>, we have created
            a distinct place in market for our quality services. Our board of
            directors have more than 20 years of experience in this domain whose
            vast knowledge and strong business acumen help us to cross millions
            of barriers and reach the height of success. Being a transport
            company, we are having highly efficient network between{' '}
            <u>Indore and Gujrat</u> so that our business operations are
            performed smoothly without any hindrance, on time. We are well
            equipped with a team of dedicated and expert professionals, who are
            engaged in providing customized services to our esteemed clients.
            Customers are the central point of our organization whose
            satisfaction is treated as the major aspect of our services.We
            emphasize on the constant innovation so that new services can be
            developed as well as existing range can be improved.
          </p>
          <h3>Features</h3>
          <ul>
            <li>On time delivery</li>
            <li>Safe and efficient transportation</li>
            <li>Minimal turn around time</li>
            <li>Proper documentation </li>
            <li>Value added services</li>
          </ul>
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
            <img src={leolife} alt="" />
            <img src={exide} alt="" />
            <img src={helios} alt="" />
            <img src={lincoln} alt="" />
            <img src={nichono} alt="" />
            <img src={nissin} alt="" />
            <img src={meditek} alt="" />
            <img src={gujratterce} alt="gujratterce" />
            <img src={alloes} alt="" />
            <img src={accord} alt="" />
            <img src={sumitomo} alt="" />
            <img src={sudarshan} alt="" />
            <img src={crest} alt="" />
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
          <h2 className="major">Services</h2>
          <ol className="">
            <li>Full/Part Load Services</li>
            <li>Parcel Services</li>
            <li>Door to Door Services</li>
            <li>Time Bond Services</li>
          </ol>
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
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <small>
                  Godown No 22, Roshan Compound, Dewas Naka,
                  <br /> Indore, Madhaya Pradesh
                </small>
              </li>

              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <small>0731-4048469</small>
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true"></i>
                <small>+91-9303444449</small>
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <small>igcindore808@gmail.com</small>
              </li>
            </ul>
          </div>
          <div className="address">
            <h3>Ahmedabad Office</h3>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <small>
                  Godown No 4, Gopinath Estate near Sardarji ka Dhaba, NH8
                  <br /> Aslali Bypass, Aslali, Ahmedabad, Gujrat
                </small>
              </li>

              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <small>079-29708750</small>
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true"></i>
                <small>+91-9303444449</small>
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
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
                href="https://github.com/codebushi/IGC - Indore Gujrat Road Carrier"
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
