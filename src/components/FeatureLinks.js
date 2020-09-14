import React from 'react'
import PropTypes from 'prop-types'

const LinkGrid = ({ links }) => (
  <div className="columns is-multiline is-centered top-section bottom-section">
    <div className="column is-12">
      <h3 className="has-text-weight-semibold is-size-2 has-text-centered anchor" id="links">
        {links.title}
      </h3>
    </div>
    <div className="column is-6">
      <section className="section-horizontal has-text-centered featured-links">
        {links.links.map((item) => (
          <div key={item.title}>
            <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
          </div>
        ))}
      </section>
    </div>
    {links.dates.length > 0 && 
    <div className="column is-6">
      <section className="section-horizontal has-text-centered featured-links">
        {links.dates.map((item) => (
          <div style={{ lineHeight: '1.3rem', marginTop: '0.4rem', marginBottom: '0.4rem' }} key={item.title}>
            <div><strong style={{fontSize: '1.0rem'}}>{item.title}</strong></div>
            <div style={{fontSize: '1.1rem'}}>{new Intl.DateTimeFormat("en-AU").format(new Date(item.date))}</div>
          </div>
        ))}
      </section>
    </div>
    }
  </div>
)

LinkGrid.propTypes = {
  links: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      })    
    ),
    dates: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.date
      })
    )
  })
}

export default LinkGrid
