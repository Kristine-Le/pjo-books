gsap.registerPlugin(ScrollTrigger);



gsap.from('#pjo', {
    opacity : 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: '.section',
        start: 'top',
    }
});

gsap.from('#hoo', {
    opacity : 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: '#pjo',
        start: 'top',
    }
});

gsap.from('#toa', {
    opacity : 0,    
    duration: 2.5,
    scrollTrigger: {
        trigger: '#hoo',
        start: 'top',
    }
});

gsap.from('#mcga', {
    opacity : 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: '#toa',
        start: 'top',
    }
});

gsap.from('#kc', {
    opacity : 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: '#mcga',
        start: 'top',
    }
});
gsap.from('#xtra, #xtra2', {
    opacity : 0,
    duration: 2.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#kc',
        start: 'top',
    }
});