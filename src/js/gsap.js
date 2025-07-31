import gsap from 'gsap';
// import {  ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const gsapAnimate = (trigger, props, scrollTriggerProps, method = 'from') => {
	if (!gsap) {
		console.log('GSAP instance not found');
		return;
	}

	const validMethods = ['from', 'to'];
	if (!validMethods.includes(method)) {
		console.log(`Invalid GSAP method: ${method}`);
		return;
	}

	if (!trigger || (typeof trigger === 'string' && !document.querySelector(trigger))) {
		console.log(`${trigger} not found in DOM`);
		return;
	}

	return gsap[method](trigger, {
		// if from method, set opacity to 0
		...(method === 'from' && { opacity: 0 }),

		// Override animation props
		...props,
		scrollTrigger: {
			// Default values
			start: '10% bottom',
			end: 'bottom 90%',
			scrub: 1,

			// Override ScrollTrigger options
			...scrollTriggerProps
		}
	});
};
