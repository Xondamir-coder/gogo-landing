import './scss/main.scss';
import gsap from 'gsap';
import { gsapAnimate } from './js/gsap';

import.meta.glob('./icons/*.svg', { eager: true });

/**
 * GSAP animations
 */

document.querySelectorAll('.section-header h2').forEach(h2 => {
	gsapAnimate(h2, { x: -25 });
});
document.querySelectorAll('.section-header:not(.events__content-header) p').forEach(p => {
	gsapAnimate(p, { x: 25 });
});

gsapAnimate(
	'.essentials__item',
	{
		y: i => (i + 1) * gsap.utils.random(15, 30),
		x: i => (i % 2 === 0 ? gsap.utils.random(-30, -15) : gsap.utils.random(15, 30)),
		rotate: () => gsap.utils.random(-20, 20),
		scale: 0.85,
		opacity: 0,
		duration: 1,
		ease: 'power4.out',
		stagger: {
			each: 0.1,
			from: 'center'
		}
	},
	{
		scrub: 1,
		start: 'top 90%',
		end: '50% 60%'
	}
);

gsapAnimate(
	'.facilities__item',
	{
		y: (i, el) => (i + 1) * 30,
		x: (i, el) => (i % 2 === 0 ? -30 : 30),
		rotate: () => gsap.utils.random(-15, 15),
		scale: 0.8,
		opacity: 0,
		ease: 'back.out(1.7)',
		duration: 1,
		stagger: {
			each: 0.15,
			from: 'start'
		}
	},
	{
		scrub: 1,
		start: 'top 85%',
		end: '50% 60%'
	}
);

document.querySelectorAll('.mockup-container > *').forEach((el, i) => {
	gsapAnimate(el, {
		x: gsap.utils.random(-40, 40),
		y: gsap.utils.random(30, 60),
		rotate: gsap.utils.random(-25, 25),
		scale: 0.8,
		opacity: 0,
		duration: 1.2,
		ease: 'back.out(1.7)',
		delay: i * 0.1 + Math.random() * 0.2
	});
});

gsapAnimate(
	'.cta__left>*',
	{
		scale: 0,
		rotation: -30,
		opacity: 0,
		transformOrigin: 'center center',
		stagger: {
			each: 0.12,
			from: 'start'
		},
		duration: 0.5,
		ease: 'back.out(1.2)' // reduced overshoot
	},
	{ trigger: '.cta__left' }
);

gsapAnimate(
	'.footer__content>*',
	{
		y: 50,
		stagger: 0.2
	},
	{
		trigger: '.footer__content',
		scrub: false
	}
);
gsapAnimate(
	'.footer__bottom>*',
	{
		y: 50,
		stagger: 0.2
	},
	{
		trigger: '.footer__bottom',
		scrub: false
	}
);

// gsapAnimate('.events__content', {
// 	y: -25
// });

// gsapAnimate('.book__content', {
// 	y: 25
// });

// TODO: animate CTA

/**
 * Other scripts
 */
const setCopyrightYear = () => {
	const elements = document.querySelectorAll('[data-copyright]');
	const currentYear = new Date().getFullYear();
	elements.forEach(el => {
		if (el.hasAttribute('data-copyright')) {
			el.textContent = currentYear;
		}
	});
};

setCopyrightYear();
