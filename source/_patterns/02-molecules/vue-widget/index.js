/**
 * Example Vue widget
 *
 * An example of a testable, standalone, javascript-driven widget that has its own store
 * for state-based logic. That store can make whatever api calls you need it to.
 *
 * Note the use of this file (`vueWidget/index.js`) as the "implementation" of the actual
 * javascript application that resides in `vueWidget/src/index.js`. Double note that if you
 * are trying to see the Vue devtools in browser, you need to open the pattern outside
 * Pattern Lab's iframe.
 */

import $ from 'jquery';

// Module dependencies
import 'protons';
import VueWidget from './src';

export const name = 'vueWidget';

export function enable($context) {
  if ($('#vue-example-widget', $context).length) {
    // We have to glue this app to some piece of DOM.
    // This is normally done where the Vue app is defined (vueWidget/src/index.js)
    // but we mount it manually here for consistency in Particle.
    new VueWidget().$mount('#vue-example-widget');
  }
}

export function disable() {}

export default enable;