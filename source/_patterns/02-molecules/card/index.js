/**
 * Card
 */

// Module dependencies
import base from 'base';
import image from 'atoms/image';
import button from 'atoms/button';

// Module styles
import './_card.scss';

export default {
  name: 'card',
  deps: [base, image, button],
  enable($context, { enableHolder }) {
    // Holder is only provided to PL, not Drupal. Like jQuery it's an IIFE
    // We can only conditionally import libraries using `require()`
    if (enableHolder) {
      require('holderjs'); // eslint-disable-line global-require
    }
  },
  disable() {},
};
