import React from 'react'
import { Link } from 'gatsby'
/*const facebook = loadable(() => import('../img/social/facebook.svg'))
const facebook = loadable(() => import('../img/social/facebook.svg'))*/

import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleNavbar = () => {
    let navSolid = 'solid';
    if (window.scrollY < 32 && !this.state.active ) {        
      navSolid = ''        
    }
    this.setState({ navSolid });
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.toggleNavbar();
    })
  }

  toggleHamburger = () => {


    // toggle the active boolean in the state    
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        if (!this.state.active) {
          // hiding
          this.toggleNavbar();
          setTimeout(() => {
            this.setState({
              navBarActiveClass: '',
            });
          }, 200)
        } else {
          // appearing
          this.setState({
            navBarActiveClass: 'is-active',
          });
          setTimeout(this.toggleNavbar, 0);
        }
      }
    )
  }

  render() {
    return (
      <nav
        className={`navbar is-transparent ${this.state.navSolid}`}
        role="navigation"
        aria-label="main-navigation"
        style={{
          position: 'fixed',
          width: '100%'
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/#" className="navbar-item" title="Logo">
              <img src={logo} alt="St. Jude's Flames" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/#about">
                About
              </Link>
              <Link className="navbar-item" to="/#links">
                Links
              </Link>
              <Link className="navbar-item" to="/#values">
                Values
              </Link>
              <Link className="navbar-item" to="/#contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar


/*
<div className="navbar-end has-text-centered">
            <a
                className="navbar-item"
                href="https://websites.sportstg.com/club_info.cgi?c=1-6-130743-0-0&a=TEAMS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={sportstg} alt="SportsTG" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.facebook.com/groups/653134331406771"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
            </div>
*/