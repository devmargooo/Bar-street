var popup = document.querySelector(".callback-form-popup");

function showCallbackForm() {
    popup.hidden = false;
}
popup.onclick = function(e) {
    var target = e.target;
    if (target.classList.contains("callback-form-popup") || target.classList.contains("callback-form__close")){
        popup.hidden = true;
    }
}

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
    changeTabsState();
    changeCarouselState();
}

$(window).on('resize', init);
$(document).ready(init);

document.onkeydown = function (e) {
    e = e || event;
    if( e.keyCode === 27 ) {
        if (popup.hidden == false) popup.hidden = true;
    }
}
