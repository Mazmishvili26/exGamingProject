import './Footer.css'


// import assets
import logo from '../../assets/logo.svg'
import facebook from '../../assets/fb.png'
import discord from '../../assets/dc.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/yt.png'
import age from '../../assets/age.png'

function Footer() {
  return (
    <section className='footer-section'>
        <div className='footer-container'>
            <div className='container footer-container-wrapper'>

                <div className='footer-top'>

                  <div className='footer-left'>
                    <div className='first-column'>
                      <ul className='footer-ul'>
                        <li>Menu</li>
                        <li>About us</li>
                        <li>Carrers</li>
                        <li>Support</li>
                        <li>FAQ</li>
                      </ul>
                    </div>
                    <div className='second-column'>
                      <ul className='footer-ul'>
                        <li>Download game</li>
                        <li>News</li>
                        <li>Store</li>
                        <li>Wallpapers</li>
                      </ul>
                    </div>
                  </div>

                  <div className='footer-right'>
                    <div className='footer-right-title-box'>
                      <h3 className='footer-right-title'>GET THE LATEST NEWS</h3>  
                    </div>
                    <div className='footer-img-wrapper'>
                      <img src={facebook}/>
                      <img src={discord}/>
                      <img src={twitter}/>
                      <img src={youtube}/>
                    </div>
                    <div className='footer-contact'>
                      <p className='footer-contact-text'>Contact me: <span className='footer-email'>nick.mazmishvili@gmail.com</span></p>
                    </div>
                  </div>


                </div>


                <div className='footer-bottom'>

                  <div className='first-line'>
                    <div className='footer-img-block'>
                      <img src={logo} className="footer-img"/>
                    </div>
                    <div className='footer-privacy-block'>
                      <ul className='privacy-ul'>
                        <li>Privacy Policy</li>
                        <li>User agreement</li>
                        <li>Rules of Conduct</li>
                      </ul>
                    </div>
                  </div>

                  <div className='second-line'>
                      <p className='copyright-text'>
                      © 2012-2023 1C Game Studios | 1С-777 Limited, 32 Kritis
                      Street,
                      Papachristoforou Building,
                      4th Floor, 3087 Limassol, Cyprus. All rights reserved.
                      </p>
                      <img src={age} className="age-img"/>
                  </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Footer