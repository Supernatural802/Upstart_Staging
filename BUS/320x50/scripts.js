(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),



        setValues = { x: 0, y: 0, autoAlpha: 0 },

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax; //shortens the tweenmax name to "t"


    function bannerInit() {
        //set unique positions and other values you plan to animate here


    t.set(blueWipe, {x:250});
    t.set(ladderHide, {x:20});
    t.set(cta, { transformOrigin: "75% 100%" });

    //t.set(copy02, {x:300});

       t.set([copy01, copy02, copy03], setValues); //sets all graphic elements opacity on stage to 0

        //init animation
        Frame01();
    }

    // animation sequence begin
    function Frame01() {



    //intro frame 01




    t.from(copy01, 1, {y:"+=20", ease: Power3.easeOut, delay:1});
    t.to(copy01, 1, {autoAlpha:1, ease: Power2.easeInOut, delay:1})
    t.from(copy02, 1, {y:"+=20", ease: Power3.easeOut, delay:1.3});
    t.to(copy02, 1, {autoAlpha:1, ease: Power2.easeInOut, delay:1.3})

    t.to(blueWipe, 1, {x:"-=250", ease: Power3.easeOut, delay:4});

    t.to(copy03, 1, { autoAlpha:1, ease: Power3.easeOut, delay:5});
    t.to([copy01, copy02], 1, {autoAlpha:0, ease: Power2.easeInOut, delay:6})

    t.to(blueWipe, .5, { x:150, ease: Power2.easeInOut, delay:7});

    t.to(container, .5, { x:400, ease: Power2.easeInOut, delay:7});
    t.from(ladderHide, 0, {autoAlpha:0, ease: Power2.easeInOut, delay:7.2})
    t.to(img01, .5, { autoAlpha:0, ease: Power2.easeOut, delay:6.8});
    t.from(logo, .5, {autoAlpha:0, ease: Power2.easeInOut, delay:7.5});
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
