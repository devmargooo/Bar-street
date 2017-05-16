var responsive = function(alias) {
    console.log($('.responsive-' + alias).is(':visible'));
    return $('.responsive-' + alias).is(':visible');
};
var resizeBlock = function() {
    console.log("resizeBlock");
    if (!responsive('desktop')) {
        var tabs = $(".tab-pane");
        console.log(tabs);
        for (var i = 0; i< tabs.length; i++){
            if(!tabs[i].classList.contains('active')){
                console.log('add');
                    tabs[i].classList.add('active');
            }
        }
    }
    else{
        console.log('removing');
        var tabs = $(".tab-pane");
        console.log(tabs);
        for (var i = 1; i< tabs.length; i++){
            if(tabs[i].classList.contains('active')){
                console.log('remove');
                tabs[i].classList.remove('active');
            }
        }
    }
};

$(window).on('resize', resizeBlock);
$(document).ready(resizeBlock);