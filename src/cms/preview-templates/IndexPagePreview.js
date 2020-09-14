import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        templateKey='index-page'
        mainpitch={data.mainpitch || {}}
        mainlinks={data.mainlinks || { links: [], dates: [] }}
        values={data.values || { blurbs: [] }}
        posts={data.posts || {}}
        contacts={data.contacts || {list: []}}        
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
