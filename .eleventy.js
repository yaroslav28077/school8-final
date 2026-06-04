const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Копіювання статичних ресурсів
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("books");
  
  // Копіювання адмінки Decap CMS
  eleventyConfig.addPassthroughCopy("src/admin");


  const mdLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", mdLib);

  // Фільтр для парсингу Markdown в шаблонах Nunjucks
  eleventyConfig.addFilter("markdown", (content) => {
    if (!content) return "";
    return mdLib.render(content);
  });

  // Фільтр для інлайн-парсингу Markdown (без тегів <p>)
  eleventyConfig.addFilter("markdownInline", (content) => {
    if (!content) return "";
    return mdLib.renderInline(content);
  });

  // Фільтр дати для sitemap
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    if (!dateObj) return new Date().toISOString().split('T')[0];
    return new Date(dateObj).toISOString().split('T')[0];
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
