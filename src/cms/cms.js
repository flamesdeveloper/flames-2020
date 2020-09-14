import loadable from '@loadable/component'
const CMS = loadable(() => import('netlify-cms-app'))
const uploadcare = loadable(() => import('netlify-cms-media-library-uploadcare'))
const cloudinary = loadable(() => import('netlify-cms-media-library-cloudinary'))
const BlogPostPreview = loadable(() => import('./preview-templates/BlogPostPreview'))
const IndexPagePreview = loadable(() => import('./preview-templates/IndexPagePreview'))

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
