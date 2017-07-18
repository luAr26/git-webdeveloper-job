import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

new MobileMenu();
new RevealOnScroll($('.featured-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');