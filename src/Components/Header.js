import React, { Component } from "react";
import ParticlesBg from "particles-bg";

var randomNumber = 0;
randomNumber = Math.floor(Math.random() * 2) + 1;

class Header extends Component {
  render() {
    var backgroundRandom =
      randomNumber === 1 ? (
        <ParticlesBg type="circle" bg={true} />
      ) : (
        <ParticlesBg type="lines" num={100} bg={true} />
      );

    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
      var description2 = this.props.data.description2;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h2>COO | Project | Product</h2>
            <br />
            <h2>{description2}</h2>
            <h3>{description}</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        {backgroundRandom}
      </header>
    );
  }
}

export default Header;
