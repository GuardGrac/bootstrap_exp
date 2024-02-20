gsap.to('.imgAnimation', {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
        
        start: '+=850',
        end: '+=500',
        scrub: true
    }
    });

        gsap.to('.imgAnimation', {
    opacity: 0,
    ease: 'none',
    immediateRender: false,
    scrollTrigger: {
        trigger: '.imgAnimation',
        
        start: 'top 20%',
        end: '+=300',
        scrub: true
    }
    });
    
    const tl1 = gsap.timeline({
        scrollTrigger : {
            trigger: ".imgAnimation",
           
            start:"top 100%",
            end: "+=1000",
            scrub: 0.5
        }
    });

    tl1.to(".imgAnimation",{y:-500, duration: 50});

    const tl_1 = gsap.timeline({
        scrollTrigger : {
            trigger: ".imgAnimation",
            
            start:"top 100%",
            end: "+=1000",
            scrub: 1
        }
    });
    tl_1.to(".imgAnimation_1",{y:300});
    tl_1.to(".imgAnimation_1",{y:-700, duration: 40});

    gsap.to('.imgAnimation2', {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec_2',
        start: 'bottom 45%',
        end: '+=500',
        scrub: true
    }
    });

        gsap.to('.imgAnimation2', {
    opacity: 0,
    ease: 'none',
    immediateRender: false,
    scrollTrigger: {
        trigger: '.imgAnimation2',
        start: 'top 20%',
        end: '+=300',
        scrub: true
    }
    });

    const tl2 = gsap.timeline({
        scrollTrigger : {
            trigger: ".imgAnimation2",
            start:"top 100%",
            end: "+=1000",
            scrub: 0.5
        }
    });

    tl2.to(".imgAnimation2",{y:-500, duration: 50});

    const tl_2 = gsap.timeline({
        scrollTrigger : {
            trigger: ".imgAnimation2",
            start:"top 100%",
            end: "+=1000",
            scrub: 1
        }
    });
    tl_2.to(".imgAnimation_2",{y:300});
    tl_2.to(".imgAnimation_2",{y:-700, duration: 40});

    gsap.to('.imgAnimation3', {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec_3',
        start: 'bottom 40%',
        end: '+=500',
        scrub: true
    }
    });

        gsap.to('.imgAnimation3', {
    opacity: 0,
    ease: 'none',
    immediateRender: false,
    scrollTrigger: {
        trigger: '.imgAnimation3',
        start: 'top 20%',
        end: '+=350',
        scrub: true
    }
    });

    const tl3 = gsap.timeline({
        scrollTrigger : {
            trigger: ".imgAnimation3",
           
            start:"top 100%",
            end: "+=1000",
            scrub: 0.5
        }
    });

    tl3.to(".imgAnimation3",{y:-500, duration: 50});

    const tl_3 = gsap.timeline({
        scrollTrigger : {
            trigger: ".imgAnimation3",
          
            start:"top 100%",
            end: "+=1000",
            scrub: 1
        }
    });
    tl_3.to(".imgAnimation_3",{y:300});
    tl_3.to(".imgAnimation_3",{y:-700, duration: 40});
   
    gsap.to("#back",{
        scrollTrigger : {
            scrub: 1
        },
        scale: 1.5,
        y:500,
    });

    gsap.to("#middle",{
        scrollTrigger : {
            scrub: 1
        },
        scale: 1.8,
        y:800,
    });

    gsap.to("#front",{
        scrollTrigger : {
            scrub: 1
        },
        scale: 0.7,
        y:400,
    });

    gsap.to("#text-sec",{
        scrollTrigger : {
            scrub: 1
        },
        y:-300,
    });

    gsap.to("#text-sec2",{
        scrollTrigger : {
            scrub: 1
        },
        y:-450,
    });

    gsap.to("#text-sec3",{
        scrollTrigger : {
            scrub: 1
        },
        y:-300,
    });