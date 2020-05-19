import React, { Component } from 'react';

class Contact extends Component {
  render() {


      if(this.props.data){
         var phone= this.props.data.phone;
         var email = this.props.data.email;
         var skype = this.props.data.skype;
         var networks= this.props.data.social.map(function(network){
          return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })

      }

    return (
      <section id="contact">
         <footer>
         <div className="row">
            <span className="footer-p">
              <p>{email}</p>
              <p>{skype}</p>
              <p>{phone}</p>
            </span>
         <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
       </div>
     </footer>
   </section>
    );
  }
}

export default Contact;
