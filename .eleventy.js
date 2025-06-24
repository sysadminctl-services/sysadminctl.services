module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("style.css");
  eleventyConfig.addWatchTarget("script.js");

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site" 
    }
  };
};