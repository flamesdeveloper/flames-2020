import React from 'react'
import PropTypes from 'prop-types'

const Attachments = ({ attachments }) => (
  <div className="columns is-multiline is-centered top-section bottom-section">
    <div className="column is-12">
      <h3 className="has-text-weight-semibold is-size-2 has-text-centered anchor" id="links">
        Post Attachments
      </h3>
      <section className="section-horizontal has-text-centered">
        {attachments.attachments.map((item) => (
          <div key={item.title}>
            <a className="featured"  href={item.file} target="_blank" rel="noreferrer">{item.title}</a>
          </div>
        ))}
      </section>
    </div>
  </div>
)

Attachments.propTypes = {
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.string
    })
  )
}

export default Attachments
