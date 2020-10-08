(function() {

    //this gives simple names from your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),



        setValues = { x: 0, y: 0, autoAlpha: 0 },

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax; //shortens the tweenmax name from "t"


    function bannerInit() {
        //set unique positions and other values you plan from animate here

        t.set([], setValues);

        t.set(img01, { x: -800 })
        // t.set(blinds, {scaleX:.3})
        // t.set(blinds, {autoAlpha:0});
        // t.set(blindGroup, {scaleX:0, autoAlpha:0});

        // t.set([copy03, copy04,copy05,copy06], {autoAlpha:0});


        t.set(rectMask, { transformOrigin: "150px 138px" }) //sets all graphic elements opacity on stage from 0



        //init animation
        Frame01();

    }

    //Frame 01
    // animation sequence begin
    function Frame01() {



        t.to(introCard, .3, { autoAlpha: 0, ease: Power3.easeOut, delay: 2 });

        t.delayedCall(2, Frame02);

    };

    function Frame02() {
        
        t.set([blackBar, copy01], { autoAlpha: 1 });

        t.to(img01, .2, { autoAlpha: 1, ease: Power0.easeOut, delay: 0 });
        t.to(img01, 20, { x: 0, ease: Power0.easeOut, delay: 0 });
        t.from(rectMask, .7, { scaleY: 0, ease: Power3.easeInOut, delay: 1.5 });
        t.to(copy01, .7, { autoAlpha: 0, ease: Power2.easeOut, delay: 4.3 });
        t.to(rectMask, 1, { scaleY: 10, ease: Power3.easeInOut, delay: 4.2 });

         
        


        t.delayedCall(4.1, Frame03);
    };

    function Frame03() {
       

        

        t.from(img02, 1, { autoAlpha: 0, ease: Power3.easeOut, delay: .5});
        
        t.from(copy02, .7, { autoAlpha: 0, y: "+=10",ease: Power3.easeInOut, delay: 1 });
        t.from(copy03, .7, { autoAlpha: 0, y: "+=10",ease: Power3.easeInOut, delay: 1 });

        t.to(copy03, .7, { autoAlpha: 0, y: "-=20", ease: Power3.easeInOut,delay: 3.5 });
        t.from(copy04, .7, { autoAlpha: 0, y: "+=20", ease: Power3.easeInOut,delay: 3.5 });

        t.to(copy04, .7, { autoAlpha: 0, y: "-=20", ease: Power3.easeInOut,delay: 5.5 });
        t.from(copy05, .7, { autoAlpha: 0, y: "+=20",ease: Power3.easeInOut, delay: 5.5 });

        t.to([copy02, copy05], .5, { autoAlpha: 0, y: "+=10", ease: Power3.easeInOut,delay: 7.5 });
        


        t.delayedCall(7.5, Frame04);
    };

    function Frame04() {

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
   




        t.delayedCall(1, Frame05);
    };

    function Frame05() {

        t.from(logo, .5, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: .5 });
        t.from(copy06, .5, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 1 });
        t.from(copy07, .5, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 2.3 });
        t.from(copy08, .5, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 2.5});


        t.from(cta, .7, { y: "+=20", autoAlpha: 0, ease: Power3.easeOut, delay: 3.5, onComplete: function() { rolloverActive = true } });




    };








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