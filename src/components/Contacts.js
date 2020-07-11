import React from 'react'
import PropTypes from 'prop-types'

const ContactGrid = ({ contacts }) => (
  <div className="columns is-multiline is-centered top-section">
    <div className="column is-12">
      <h3 className="has-text-weight-semibold is-size-2 has-text-centered anchor" id="contact">
        {contacts.title}
      </h3>
    </div>
    {contacts.list.map((item) => (
      <div key={item.position} className="column is-4">
        <section className="section-horizontal has-text-centered">
          <h4>{item.position}</h4>
          <p>
            {item.name} <br />
            <a href={`tel:${item.phone}`}>{item.phone}</a><br />
            <a href={`mailto:${item.email}`}>{item.email}</a>
          </p>
        </section>
      </div>
    ))}
  </div>
)

ContactGrid.propTypes = {
  contacts: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        position: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
      })
    )
  })
}

export default ContactGrid
