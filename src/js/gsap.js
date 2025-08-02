import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const gsapAnimate = (
	trigger,
	props = {},
	scrollTriggerProps = {},
	method = 'from',
	debug = false
) => {
	const validMethods = ['from', 'to', 'fromTo'];
	if (!validMethods.includes(method)) {
		console.warn(`Invalid GSAP method: ${method}`);
		return;
	}

	let target = trigger;

	if (!trigger) {
		console.warn('Trigger is undefined or null.');
		return;
	}

	// Only add opacity: 0 if not already provided
	const animationProps = {
		...(method === 'from' && !('opacity' in props) && { opacity: 0 }),
		...props,
		scrollTrigger: {
			trigger,

			// For scrubbing this is the best
			start: '10% bottom',
			end: 'bottom 90%',
			scrub: 1,

			// For normal this is the best
			// start: '30% bottom',

			...scrollTriggerProps
		}
	};

	if (debug) {
		console.log('GSAP Animation Config:', {
			method,
			target,
			animationProps
		});
	}

	return gsap[method](trigger, animationProps);
};
