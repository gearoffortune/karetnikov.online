module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('admin')
  eleventyConfig.addPassthroughCopy('font.css')
  eleventyConfig.addPassthroughCopy('site.webmanifest')

  return {
      dir: {
        input: 'src',
        includes: '_includes',
        output: 'dist',
      },
      passthroughFileCopy: true,
      templateFormats: ['njk', 'md'],
      htmlTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk',
    }
}