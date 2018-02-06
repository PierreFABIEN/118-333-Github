$(function() {

    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#lsv-anim',
        triggerHook: 0.6
    })
    .setClassToggle('#lsv-anim', 'fade-in')
    .addTo(controller);


    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#content-left',
        triggerHook: 0.7
    })
    .setClassToggle('#content-left', 'fade-in')
    .addTo(controller);



    var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '#news-anim',
        triggerHook: 0.7
    })
    .setClassToggle('#news-anim', 'fade-in')
    .addTo(controller);



    var ourScene7 = new ScrollMagic.Scene({
        triggerElement: '#content-right',
        triggerHook: 0.7
    })
    .setClassToggle('#content-right', 'fade-in')
    .addTo(controller);



    var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '#welcome-opacity',
        triggerHook: 0.7
    })
    .setClassToggle('#welcome-opacity', 'fade-in')
    .addTo(controller);



    var ourScene4 = new ScrollMagic.Scene({
        triggerElement: '#perspective',
        triggerHook: 0.7
    })
    .setClassToggle('#perspective', 'fade-in')
    .addTo(controller);



    var ourScene5 = new ScrollMagic.Scene({
        triggerElement: '#article-slider',
        triggerHook: 0.7
    })
    .setClassToggle('#article-slider', 'fade-in')
    .addTo(controller);




        var ourScene6 = new ScrollMagic.Scene({
            triggerElement: '#article-categories',
            triggerHook: 0.7
        })
        .setClassToggle('#article-categories', 'fade-in')
        .addTo(controller);


});
