import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        Copyright &copy; {(new Date().getFullYear())} St. Jude's Flames Basketball Club
      </footer>
    )
  }
}

export default Footer
