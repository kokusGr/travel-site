import mobileMenu from './modules/_mobile-menu';
import revealOnScroll from './modules/_reveal-on-scroll';

mobileMenu.init();
revealOnScroll.init({
  offset: '75%',
  selectors: ['feature-item', 'testimonial']
});
