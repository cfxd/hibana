/*
 |--------------------------------------------------------------------------
 | Shopify Themekit + BrowserSync
 |--------------------------------------------------------------------------
 |
 | This is a lightweight implementation of BrowserSync with Themekit. It is not intended to be a replacement to Slate.
 | The snippet rule option should avoid the known issues of clashing with Shopify's Analytics.
 | CSS is served from Shopify, not compiled / hot reloaded Locally, therefore there will be a noticeable delay between making, and seeing changes.
 |
 */

const fs = require('fs');
const YAML = require('yaml');

const file = fs.readFileSync('./config.yml', 'utf8');
const config = YAML.parse(file);

const target = `https://${config.development.store}`;
const themeId = config.development.theme_id;
const proxyTarget = target + (themeId === 'live' ? '' : `?preview_theme_id=${themeId}`);

module.exports = {
  files: './themekit_update',
  proxy: {
    target: proxyTarget,
    middleware: (req, res, next) => {
      const prefix = req.url.indexOf('?') > -1 ? '&' : '?';
      const queryStringComponents = ['_fd=0&pb=0'];
      req.url += prefix + queryStringComponents.join('&');

      next();
    },
  },
  snippetOptions: {
    rule: {
      match: /<\/body>/i,
      fn(snippet, match) {
        return snippet + match;
      },
    },
  },
  reloadDelay: 1000,
};
