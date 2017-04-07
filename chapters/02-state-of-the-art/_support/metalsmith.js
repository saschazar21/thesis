const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');

Metalsmith(__dirname)
.metadata({                  // define globally available variables
  name: 'Test site',
  url: 'http://localhost:3000'
})
.source('_src')              // the content directory
.destination('_site')        // the output directory for compiled content
.clean(true)                 // delete output directory first? yes!
// (...)                     // Additional plugin configuration
.use(layouts({
  engine: 'handlebars',
  pattern: '*.html'          // Plugin would look for .html files, although
}))                          // not yet processed by markdown renderer
.use(markdown())             // <- Here markdown gets processed to HTML
.build((err) => {
  if (err) {
    throw err;
  }
  console.log('Success!');
});
