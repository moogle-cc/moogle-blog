import React from 'react';

const Footer = ({config, constants}) => {
    return (
      <div className="footer">
        <div className="columns">
          <div className="column">
            {/*<span>{config.BRAND_LOGO}</span>*/}
            {/* <img src={config.BRAND_ICON ? config.BRAND_ICON : ' '} alt="Logo" /> */}
          </div>
          <div className="column is-three-fifths">
              <hr/>
              <p>
                  {constants && constants.FOOTER ? constants.FOOTER : ''}
              </p>
                <div className="socialIcons flex">
              { constants && constants.TWITTER_URL ? 
                  <div className="icon">
                      <a className="has-text-primary" href={constants.TWITTER_URL} target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                      </a>
                  </div> : ''
              }
              {
                constants && constants.FACEBOOK_URL ? 
                <div className="icon">
                      <a className="has-text-primary" href={constants.FACEBOOK_URL} target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook"></i>
                      </a>
                  </div> : ''
              }
              {
                constants && constants.INSTAGRAM_URL ? 
                <div className="icon">
                      <a className="has-text-primary" href={constants.INSTAGRAM_URL} target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                      </a>
                  </div> : ''
              }
              </div>
              <div className="has-text-right">
                <p className="tag">Powered by <a className="has-text-primary ml-1" href="https://moogle.cc" target="_blank" rel="noreferrer"> Moogle</a></p>
              </div> 
          </div>
          <div className="column"></div>
        </div>
      </div>
    )
}

export default Footer;
