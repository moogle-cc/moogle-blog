import React, { useState, useEffect } from 'react';
import {stripCRLFTDoubleQuotesFromHTML, subscriptionEmbedInConstantsIsAUrl} from '../../utils';

const Navbar = ({blogTitle, config, constants}) => {
  let markup = (content) => {
    return {__html: content};
  } 

  const [embedIsAUrl, setEmbedIsAUrl] = useState(false);

  useEffect(() => {
    if(constants) setEmbedIsAUrl(subscriptionEmbedInConstantsIsAUrl(constants));
  }, [constants]);

  return (
    <div className="columns">
      {(!constants || !constants.SUBSCRIPTION_EMBED || constants.SUBSCRIPTION_EMBED.trim().length === 0) ?
        <>
          <div className="column"></div>
          <div className="column is-three-fifths has-text-centered">
            <a className="has-text-dark is-size-3-desktop is-size-5-mobile is-family-secondary" href={`${process.env.PUBLIC_URL}`}> {blogTitle} </a>
          </div>
          <div className="column"></div> 
        </>:
        <>
          <div className="column has-text-centered">
            <a className="has-text-dark is-size-5-touch is-size-4-desktop m-2 p-2 is-family-secondary" href={`${process.env.PUBLIC_URL}`}> {blogTitle} </a>
            <div className={`dropdown is-right is-hoverable ${embedIsAUrl ? 'is-hidden' : ''}`}>
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu6">
                  <span className="has-text-dark is-size-6 is-family-secondary">Subscribe</span>
                  <span className={`icon is-small`}>
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu6" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <div id="subscription-form" dangerouslySetInnerHTML={markup(stripCRLFTDoubleQuotesFromHTML(constants.SUBSCRIPTION_EMBED))}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href={constants.SUBSCRIPTION_EMBED} target="_blank" rel="noreferrer" className={`button is-outlined has-text-dark ${!embedIsAUrl ? 'is-hidden' : ''}`}>Subscribe</a>
          </div>
        </>
      }
    </div>
  )
}

export default Navbar;
