import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"  
          style={{
            height: '300px'
          }}        
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #045f00, -0.5rem 0 0 #045f00',
              backgroundColor: '#045f00',
              color: 'white',
              padding: '1rem',
              marginTop: '32px'
            }}
          >
            Latest Posts
          </h1>
        </div>
        <section className="section-horizontal">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
