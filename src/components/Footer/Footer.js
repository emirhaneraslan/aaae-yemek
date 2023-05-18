import './Footer.css'
import PropTypes from 'prop-types'
import React from "react"

const Footer = () => {
    return(
        <>
        <section id="footer_section1">
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <h5 className="footer_section1_h"><a href="#">AAAEYEMEK</a></h5>
                </div>

              <div className="col-md-6">
                <h5 className="footer_section1_h">Sosyal Medya</h5>
                <div className="social"><a href="http://www.facebook.com" target="_blank">Facebook</a></div>
                <div className="social"><a href="http://www.instagram.com" target="_blank">Instagram</a></div>
                <div className="social"><a href="http://twitter.com" target="_blank"> Twitter</a></div>
                <div className="social"><a href="http://youtube.com" target="_blank"> Youtube</a></div>
              </div>
            </div>
          </div>
        </div>  
      </section>

      <section id="footer_section2">
        <div id="footer_section2_div">
          ©2023 AAAEYemek Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.
        </div>
      </section>
        </>
    )
}

export default Footer