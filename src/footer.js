import React, {Component} from 'react';
import './App.scss';

import linkedinLogo from './assets/icons/linkedin.svg';
import tumblrLogo from './assets/icons/tumblr.svg';
import twitterLogo from './assets/icons/twitter.svg';
import whatsappLogo from './assets/icons/whatsapp.svg';
import facebookLogo from './assets/icons/facebook.svg';

class Footer extends Component {
    constructor(props) {
        super(props)
      }

      componentDidMount() {

      }

      render() {
        return (
          <div className={"footerContainer"} ref={this.ref}>
            <div className={"leftSideFooter"}>
             <div className={"iconContainer"}>
             <img src={linkedinLogo} alt="Rx" />
             <img src={tumblrLogo} alt="Rx" />
             <img src={twitterLogo} alt="Rx" />
             <img src={whatsappLogo} alt="Rx" />
             <img src={facebookLogo} alt="Rx" />
             </div>
             <p>Copyright &copy; 2020. True Info All Rights Reserved.</p>
             </div>
             <div><button className={"referalBtn"}>DIGITAL SIGNATURE</button></div>
          </div> 
        )
      }
}

export default Footer;
