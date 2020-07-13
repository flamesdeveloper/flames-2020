import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ values }) => (
  <div className="columns is-multiline is-centered top-section bottom-section">
    <div className="column is-12">
      <h3 className="has-text-weight-semibold is-size-2 has-text-centered anchor" id="values">
        {values.title}
      </h3>
    </div>
    {values.blurbs.map((item) => (
      <div key={item.title} className="column is-4 is-parent">
        <section className="section-horizontal is-child box same-height">
          <div className="has-text-centered">
            <h4>{item.title}</h4>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    blurbs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
      })
    )
    })
}

export default FeatureGrid
