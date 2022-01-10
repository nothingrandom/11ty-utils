import slug from './filters/slug';

module.exports = (config, options) => {
  config.addFilter('slug', slug);
}