
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/bryant/Sites/gatsby_tutorial/gatsby-tutorial/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/bryant/Sites/gatsby_tutorial/gatsby-tutorial/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/bryant/Sites/gatsby_tutorial/gatsby-tutorial/src/pages/index.js"))
}

