import React from 'react'
import PropTypes from 'prop-types'

const LinkGrid = ({ links }) => (
  <div className="columns is-multiline is-centered top-section bottom-section">
    <div className="column is-12">
      <h3 className="has-text-weight-semibold is-size-2 has-text-centered anchor" id="links">
        {links.title}
      </h3>
      <section className="section-horizontal has-text-centered">
        {links.links.map((item) => (
          <div key={item.title}>
            <a className="featured"  href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
          </div>
        ))}
      </section>
    </div>
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
    )
  })
}

export default LinkGrid