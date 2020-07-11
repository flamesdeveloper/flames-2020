import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Links from '../components/FeatureLinks'
import BlogRoll from '../components/BlogRoll'
import ContactsGrid from '../components/Contacts'

export const IndexPageTemplate = ({
  templateKey,
  mainpitch,
  mainlinks,
  values,
  posts,
  contacts,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0 hero"
    >
      &nbsp;
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="content">
                <div className="content">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-centered anchor" id="about">{mainpitch.title}</h3>
                    <div className="tile">
                      <p className="subtitle bottom-section">{mainpitch.description}</p>
                    </div>
                </div>
                <Links links={mainlinks} />
                <Features values={values} />
                <ContactsGrid contacts={contacts} />
                <div className="column is-12 top-section">
                  <h3 className="has-text-weight-semibold is-size-2 has-text-centered anchor" id="posts">
                    {posts.title}
                  </h3>
                  <BlogRoll />                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  templateKey: PropTypes.string,
  mainpitch: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }),
  mainlinks: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.array,
  }),
  values: PropTypes.shape({
    title: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  posts: PropTypes.shape({
    title: PropTypes.string
  }),
  contacts: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        templateKey={frontmatter.templateKey}
        mainpitch={frontmatter.mainpitch}
        mainlinks={frontmatter.mainlinks}
        values={frontmatter.values}
        posts={frontmatter.posts}
        contacts={frontmatter.contacts}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        templateKey
        mainpitch {
          title
          description
        }
        mainlinks {
          title
          links {
            title
            url
          }
        }
        values {
          title
          blurbs {
            title
            text
          }
        }
        posts {
          title
        }
        contacts {
          title
          list {
            position
            name
            phone
            email
          }
        }
      }
    }
  }
`
