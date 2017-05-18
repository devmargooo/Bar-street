var responsive = function(alias) {
    return $('.responsive-' + alias).is(':visible');
};
var changeTabsState = function() {
    if (!responsive('desktop')) {
        var tabs = $(".tab-pane");
        for (var i = 0; i< tabs.length; i++){
            if(!tabs[i].classList.contains('active')){
                    tabs[i].classList.add('active');
            }
        }
    }
    else{
        var tabs = $(".tab-pane");
        for (var i = 1; i< tabs.length; i++){
            if(tabs[i].classList.contains('active')){
                tabs[i].classList.remove('active');
            }
        }
    }
};

function checkIfSmallCarouselIsShowing() {
    return document.querySelector(".carousel-small");
}
function checkIfMediumCarouselIsShowing() {
    return document.querySelector(".carousel-medium");
}
function checkIfBigCarouselIsShowing() {
    return document.querySelector(".carousel-big");
}
function showBigCarousel() {
    console.log("starting draw big carousel...");
    var currentCarousel = document.querySelector('.csslider');
    if (currentCarousel.offsetWidth == 0){
        console.log('something bad happens :(');
        return;
    }
    var parent = currentCarousel.parentNode;
    parent.removeChild(currentCarousel);
    var newCarousel = document.querySelector('.carousel-big-template');
    parent.appendChild(document.importNode(newCarousel.content, true));
}
function showMediumCarousel() {
    console.log("starting draw medium carousel...");
    var currentCarousel = document.querySelector('.csslider');
    if (currentCarousel.offsetWidth == 0){
        console.log('something bad happens :(');
        return;
    }
    var parent = currentCarousel.parentNode;
    parent.removeChild(currentCarousel);
    var newCarousel = document.querySelector('.carousel-medium-template');
    parent.appendChild(document.importNode(newCarousel.content, true));
}
function showSmallCarousel() {
    console.log("starting draw small carousel...");
    var currentCarousel = document.querySelector('.csslider');
    if (currentCarousel.offsetWidth == 0){
        console.log('something bad happens :(');
        return;
    }
    var parent = currentCarousel.parentNode;
    parent.removeChild(currentCarousel);
    var newCarousel = document.querySelector('.carousel-small-template');
    parent.appendChild(document.importNode(newCarousel.content, true));
}

var changeCarouselState = function() {
    if (responsive('desktop')){
        if(!checkIfBigCarouselIsShowing()){
            showBigCarousel();
        }
        return;
    } else if (responsive('tablet-portret')){
        if(!checkIfMediumCarouselIsShowing()){
            showMediumCarousel();
        }
        return;
    } else {
        if(!checkIfSmallCarouselIsShowing()){
            showSmallCarousel();
        }
    }
}

function init() {
    /*console.log("small: " + !!checkIfSmallCarouselIsShowing());
    console.log("medium: " + !!checkIfMediumCarouselIsShowing());
    console.log("big: " + checkIfBigCarouselIsShowing());*/
    changeTabsState();
    changeCarouselState();
}

$(window).on('resize', init);
$(document).ready(init);
