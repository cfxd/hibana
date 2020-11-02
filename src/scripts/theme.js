/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

/* ----------------------------------------------------------------------
| 📦 Dependencies
|--------------------------------------------------------------------- */
import lazysizes from 'lazysizes';

/* ----------------------------------------------------------------------
| 💅 CSS - imported here so webpack can compile to dist
|--------------------------------------------------------------------- */
import '../styles/theme.scss';

/* ----------------------------------------------------------------------
| 💅 LazySizes - additional plugins
|--------------------------------------------------------------------- */
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

/* ----------------------------------------------------------------------
| 💅 LazySizes - sensible defaults
|--------------------------------------------------------------------- */
lazysizes.cfg.loadMode = 1;
lazysizes.cfg.expand = 1000;
lazysizes.cfg.expFactor = 4;

/* ----------------------------------------------------------------------
| 📦 Modules - dynamically import modules
|--------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-module]').forEach((el) => {
    const name = el.getAttribute('data-module');

    const moduleInit = require(`./modules/${name}`).default;
    moduleInit({ el });
  });
});
