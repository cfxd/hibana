import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import '../utils/focus-ring';
import '../../styles/theme.scss';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';

// Common a11y fixes
focusHash();
bindInPageLinks();

// eslint-disable-next-line func-style
export const createContext = (el) => {
  // eslint-disable-next-line no-unused-vars
  const context = {context: el};
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-module]').forEach((el) => {
    const name = el.getAttribute('data-module');
    const moduleInit = require(`../modules/${name}`).default;

    moduleInit({el});
  });

  // If the device is iOS add a class to the body so we can do specific CSS for it
  if (Boolean(navigator.platform) && /iPad|iPhone|iPod/.test(navigator.platform)) {
    const body = document.body || document.documentElement;
    body.classList.add('is-iOS');
  }
});
