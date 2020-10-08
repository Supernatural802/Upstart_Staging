(function() {

    //this gives simple names from your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),



        setValues = { x: 0, y: 0, autoAlpha: 0 },

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax; //shortens the tweenmax name from "t"


    function bannerInit() {
        //set unique positions and other values you plan from animate here

        t.set([], setValues);

        t.set([logo,bk1,img01, img02, img03], { y: 300 })
        // t.set(blinds, {scaleX:.3})
        // t.set(blinds, {autoAlpha:0});
        // t.set(blindGroup, {scaleX:0, autoAlpha:0});

        // t.set([copy03, copy04,copy05,copy06], {autoAlpha:0});


        



        //init animation
        Frame01();

    }

    //Frame 01
    // animation sequence begin
    function Frame01() {



        t.to(introCard, .7, { y: -300, ease: Power3.easeInOut, delay: 2 });

        t.delayedCall(2, Frame02);

    };

    function Frame02() {

        t.set(money01, 0, { autoAlpha: 1 });
     


        t.to(img01, .7, { y:0, ease: Power3.easeInOut, delay: 0 });
      
        t.to(copy01, .7, { autoAlpha: 1, ease: Power3.easeOut,  delay: 1 });
        t.from(money01, .7, {  autoAlpha: 0,y: 30, ease: Power3.easeInOut, delay: 2 });
       
        t.to([img01, copy01, money01], .7, { y: -300, ease: Power3.easeInOut, delay: 4 });
      


        t.delayedCall(4, Frame03);
    };

    function Frame03() {

        t.set([money02a, money02b], 0, { autoAlpha: 1 });
     


        t.to(img02, .7, { y:0, ease: Power3.easeInOut, delay: 0 });
      
        t.to(copy02, .7, { autoAlpha: 1, ease: Power3.easeOut,  delay: 1 });
        t.from(money02a, .7, {  autoAlpha: 0,y: 30, ease: Power3.easeInOut, delay: 2 });
        t.from(money02b, .7, {  autoAlpha: 0,y: 30, ease: Power3.easeInOut, delay: 2.1 });
       
        t.to([img02, copy02, money02a, money02b], .7, { y: -300, ease: Power3.easeInOut, delay: 4 });



        t.delayedCall(4, Frame04);
    };

    function Frame04() {

        t.set([money03a, money03b, money03c], 0, { autoAlpha: 1 });
     


        t.to(img03, .7, { y:0, ease: Power3.easeInOut, delay: 0 });
      
        t.to(copy03, .7, { autoAlpha: 1, ease: Power3.easeOut,  delay: 1 });
        t.from(money03a, .7, {  autoAlpha: 0,y: 30, ease: Power3.easeInOut, delay: 2 });
        t.from(money03b, .7, {  autoAlpha: 0,y: 30, ease: Power3.easeInOut, delay: 2.1 });
        t.from(money03c, .7, {  autoAlpha: 0,y: 30, ease: Power3.easeInOut, delay: 2.2 });


         t.to(bk1, .7, { y:0, ease: Power3.easeInOut, delay: 4 });
         t.to([img03, copy03, money03a, money03b, money03c], .7, { y: -300, ease: Power3.easeInOut, delay: 4 });

       
        





        t.delayedCall(4, Frame05);
    };


    function Frame05() {

         t.set(logo, 0, { autoAlpha: 1 });



        t.to(logo, .7, {  y:0, rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 0 });
        t.from(copy04, .7, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 1 });
        t.from(copy05, .7, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 1.3 });
        t.from(copy06, .7, { autoAlpha: 0, y: "+=10", rotation: .01, willChange: "transform", force3D: true, ease: Power3.easeInOut, delay: 1.5});


        t.from(cta, .7, { y: "+=20", autoAlpha: 0, ease: Power3.easeInOut, delay: 2, onComplete: function() { rolloverActive = true } });








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