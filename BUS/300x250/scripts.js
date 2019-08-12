(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),



        setValues = { x: 0, y: 0, autoAlpha: 0 },

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax; //shortens the tweenmax name to "t"


    function bannerInit() {
        //set unique positions and other values you plan to animate here


    t.set(blueWipe, {x:215});
    //t.set(img01, {x:-20, y:-7});
    //t.set(img01, {scale:.8});
    t.set(cta, { transformOrigin: "30% 75%" });
    //t.set(img01, { transformOrigin: "30% 70%" });

       t.set([copy01, copy02, copy03, copy04], setValues); //sets all graphic elements opacity on stage to 0

        //init animation
        Frame01();
    }

    // animation sequence begin
    function Frame01() {



    //intro frame 01





        //t.from(img01, 5, {scale:.8,rotation: .01, willChange: "transform", force3D:true, ease: Power2.easeOut, delay:0});
        //t.to(img01, 5, {y:"-=13", ease: Power2.easeOut, delay:.5});
        t.to(blueWipe, 1, {x:"-=215", ease: Power3.easeOut, delay:3});


        t.to(copy01, 1, { autoAlpha:1, ease: Power3.easeOut, delay:3.5});
        t.from(copy01, 1, { y:"+=20",  rotation: .01, willChange: "transform", force3D:true, ease: Power3.easeOut, delay:3.5});

        t.to(copy02, 1, { autoAlpha:1, ease: Power3.easeOut, delay:3.8});
        t.from(copy02, 1, { y:"+=20",  rotation: .01, willChange: "transform", force3D:true, ease: Power3.easeOut, delay:3.8});

        t.to(copy03, 1, { autoAlpha:1, ease: Power3.easeOut, delay:4.1});
        t.from(copy03, 1, { y:"+=20",  rotation: .01, willChange: "transform", force3D:true, ease: Power3.easeOut, delay:4.1});

        t.to(copy04, 1, { autoAlpha:1, ease: Power3.easeOut, delay:4.8});
        //t.from(copy04, 1, { y:"+=15",  rotation: .01, willChange: "transform", force3D:true, ease: Power3.easeOut, delay:6.5});



        t.to(blueWipe, .5, { x:215, ease: Power2.easeInOut, delay:7.5});
        t.to(container, .5, { x:250, ease: Power2.easeInOut, delay:7.5});

        t.from(ladderHide, 0, {autoAlpha:0, ease: Power2.easeInOut, delay:7.5})
        t.to(img01, .5, { autoAlpha:0, ease: Power2.easeInOut, delay:7.3});
        t.from(logo, .5, {autoAlpha:0, ease: Power2.easeOut, delay:8});
        t.from(legal, .5, {autoAlpha:0, ease: Power1.easeOut, delay:9});

        t.from(cta, .5, {autoAlpha:0, willChange: "transform", force3D:true, ease: Power2.easeOut, delay:8.5,  onComplete: function() { rolloverActive = true } });
        t.to(cta, .5, {scale:1.15, rotation: .01, willChange: "transform", force3D:true, ease: Power3.easeOut, delay:9.5});
        t.to(cta, .5, {scale:1, rotation: .01, willChange: "transform", force3D:true, ease: Power3.easeOut, delay:9.7});








        }







     //rollover functions
    document.getElementById('hit').onmouseover =
        function(event) {
            {
                if (rolloverActive) {

                    t.to(cta, .2, { scale:1.1, rotation: .01,force3D:true, willChange: "transform", ease: Power3.easeOut });
                    t.to(cta, .2, { scale:1, rotation: .01, force3D:true, willChange: "transform", ease: Power3.easeOut,delay:.2, });
                }
            }
        };

    document.getElementById('hit').onmouseout =
        function(event) {
            {
                if (rolloverActive) {
                      //t.to(cta, .3, { scale:1, ease: Power3.easeOut });
                }
            }
        };


    // document.getElementById('hit2').onmouseover =
    //     function(event) {
    //         {
    //             if (rolloverActive) {
    //
    //                 t.to([legal_Box,legal_Box2, close, close_line, legal_rollover], .5, { autoAlpha:1, ease: Power3.easeOut });
    //             }
    //         }
    //     };
    //
    // document.getElementById('hit3').onclick =
    //     function(event) {
    //         {
    //             if (rolloverActive) {
    //                 t.to([legal_rollover, close, close_line, legal_Box, legal_Box2], .5, { autoAlpha:0, ease: Power3.easeOut });
    //             }
    //         }
    //     };





    bannerInit();





})();
