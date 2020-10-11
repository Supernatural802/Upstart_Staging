(function() {

    //this gives simple names from your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),



        setValues = { x: 0, y: 0, autoAlpha: 0 },

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax; //shortens the tweenmax name from "t"


    function bannerInit() {
        //set unique positions and other values you plan from animate here

        t.set([], setValues);

        t.set([img01, img02, img03], { x: 300 })


        t.set(rectMask, { transformOrigin: "82px 139px" })
        t.set(quotesTop01, { transformOrigin: "80px 100px" })
        t.set(quotesBottom01, { transformOrigin: "-80px -50px" })
        t.set([copy01], { transformOrigin: "center center" })
        t.set([copy02], { transformOrigin: "center center" })
        t.set([copy03], { transformOrigin: "center center" })
        t.set([copy04], { transformOrigin: "center center" })


        //init animation
        Frame01();

    }

    //Frame 01
    // animation sequence begin
    function Frame01() {

        t.to(introCard, .5, { x: -300, ease: Power3.easeInOut, delay: 2 });

        t.delayedCall(2, Frame02);

    };

    function Frame02() {
        t.set([blackBox, copy01, quotesTop01], { autoAlpha: 1 });
        t.to(img01, .5, { x: 0, ease: Power3.easeInOut, delay: 0 });

        t.from(rectMask, .5, { scale: 0, ease: Power3.easeInOut, delay: .5 });
        t.from(quotesTop01, .5, { autoAlpha: 0, scale: 0, ease: Power3.easeInOut, delay: .5 });
        t.from(quotesBottom01, .5, { autoAlpha: 0, scale: 0, ease: Power3.easeInOut, delay: .5 });
        t.from(copy01, .5, { autoAlpha: 0, scale: 0, ease: Power3.easeInOut, delay: .5 });
        t.from(ratings01, .5, { autoAlpha: 0, x: "+=10", ease: Power3.easeInOut, delay: .9 });

        t.to(img01, .5, { x: -300, ease: Power3.easeInOut, delay: 3 });
        t.to(copy01, .5, { autoAlpha: 0, delay: 4 });
        t.to(ratings01, .5, { x: -150, ease: Power3.easeInOut, delay: 3 });
        t.to(container, .5, { x: -300, ease: Power3.easeInOut, delay: 3 });
        t.delayedCall(3, Frame03);
    };

    function Frame03() {

        t.set(copy02, { autoAlpha: 1 });

        t.to(img02, .5, { x: 0, ease: Power3.easeInOut, delay: 0 });
        t.to(container, 0, { x: 0, delay: .5 });

        t.to(rectMask, 0, { scale: 0, x: 130, y: 18, ease: Power3.easeInOut, delay: .5 });
        t.to(rectMask, .5, { scale: 1, ease: Power3.easeInOut, delay: .5 });


        t.to(quotesTop01, 0, { autoAlpha: 0, x: 130, y: 20, scale: 0, ease: Power3.easeInOut, delay: .5 });
        t.to(quotesTop01, .5, { autoAlpha: 1, scale: 1, ease: Power3.easeInOut, delay: .5 });

        t.to(quotesBottom01, 0, { autoAlpha: 0, x: 130, y: 10, scale: 0, ease: Power3.easeInOut, delay: .5 });
        t.to(quotesBottom01, .5, { autoAlpha: 1, scale: 1, ease: Power3.easeInOut, delay: .5 });


        t.from(copy02, .5, { autoAlpha: 0, scale: 0, ease: Power3.easeInOut, delay: .5 });

        t.to(ratings01, 0, { autoAlpha: 0, x: 140, y: 18, ease: Power3.easeInOut, delay: .9 });
        t.to(ratings01, .5, { autoAlpha: 1, x: "-=10", ease: Power3.easeInOut, delay: .9 });

        t.to([img02, container], .5, { x: -300, ease: Power3.easeInOut, delay: 3 });
        t.to(ratings01, 0, { autoAlpha: 0, delay: 3.5 });


        t.delayedCall(3, Frame04);
    };

    function Frame04() {
        t.set([copy03, bk2], { autoAlpha: 1 });
        t.to(img03, .5, { x: 0, ease: Power3.easeInOut, delay: 0 });
        t.to(container, 0, { x: 0, delay: .5 });

        t.to(rectMask, 0, { scale: 0, x: -5, y: -32, ease: Power3.easeInOut, delay: .5 });
        t.to(rectMask, .5, { scale: 1, ease: Power3.easeInOut, delay: .5 });


        t.to(quotesTop01, 0, { autoAlpha: 0, x: 0, y: -40, scale: 0, ease: Power3.easeInOut, delay: .5 });
        t.to(quotesTop01, .5, { autoAlpha: 1, scale: 1, ease: Power3.easeInOut, delay: .5 });

        t.to(quotesBottom01, 0, { autoAlpha: 0, x: 0, y: -30, scale: 0, ease: Power3.easeInOut, delay: .5 });
        t.to(quotesBottom01, .5, { autoAlpha: 1, scale: 1, ease: Power3.easeInOut, delay: .5 });


        t.from(copy03, .5, { autoAlpha: 0, scale: 0, ease: Power3.easeInOut, delay: .5 });

        t.to(logoSM, .5, { autoAlpha: 1, x: "-=10", ease: Power3.easeInOut, delay: .9 });

        t.to([img03, container], .5, { x: -300, ease: Power3.easeInOut, delay: 3 });

        t.delayedCall(3, Frame05);
    };

    function Frame05() {

        t.from(copy04, .5, { autoAlpha: 0, scale: 5, ease: Power4.easeOut, delay: .5 });
        t.delayedCall(4, Frame06);
    };

    function Frame06() {

        t.set(blindGroup, { autoAlpha: 1 });

        t.from(blind01, .7, { scaleX: 0, ease: Power3.easeInOut, delay: 0 });
        t.from(blind02, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .1 });
        t.from(blind03, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .2 });
        t.from(blind04, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .3 });
        t.from(blind05, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .4 });
        t.from(blind06, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .5 });
        t.from(blind07, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .6 });
        t.from(blind08, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .7 });
        t.from(blind09, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .8 });
        t.from(blind10, .7, { scaleX: 0, ease: Power3.easeInOut, delay: .9 });

        t.delayedCall(.5, Frame07);
    };

    function Frame07() {


        t.from(logo, .5, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 1 });

        t.from(copy05, .5, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 1.3 });
        t.from(copy06, .5, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 1.5 });

        t.from(cta, .5, { y: "+=20", autoAlpha: 0, ease: Power3.easeInOut, delay: 2.5, onComplete: function() { rolloverActive = true } });

    }







    //rollover functions
    // document.getElementById('hit').onmouseover =
    //     function(event) {
    //         {
    //             if (rolloverActive) {
    //                 t.set(cta_whiteSlide, { x: 0 });
    //                 t.to(cta_whiteSlide, .5, { x: "+=200", ease: Power3.easeOut });
    //                 t.to(ctaCopy_green, .2, { autoAlpha: 0, ease: Power3.easeOut });
    //             }
    //         }
    //     };

    // document.getElementById('hit').onmouseout =
    //     function(event) {
    //         {
    //             if (rolloverActive) {
    //                 t.to(cta_whiteSlide, .5, { x: 0, ease: Power3.easeOut });
    //                 t.to(ctaCopy_green, .2, { autoAlpha: 1, ease: Power3.easeOut });
    //             }
    //         }
    //     };





    bannerInit();





})();