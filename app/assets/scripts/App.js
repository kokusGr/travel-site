'use strict';
/*jshint esversion: 6 */

import mobileMenu from './modules/_mobile-menu';
import revealOnScroll from './modules/_reveal-on-scroll';
import stickyHeader from './modules/_sticky-header';

mobileMenu.init();

revealOnScroll().init({
  offset: '75%',
  selectors: ['feature-item', 'testimonial']
});


stickyHeader.init();