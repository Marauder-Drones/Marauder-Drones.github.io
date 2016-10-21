/*
*
*   Custom code for Maruader Drone's Site
*   Thomas Mullen 2016
*   
*   Uses my own library shortDOM.js.
*
*/


$.onReady(function(){
    //Scrol prompt
    setTimeout(function(){
        $.style("#scrollPrompt", "opacity", "1");
    },5000);
    window.addEventListener("scroll", function(){
        $.style("#scrollPrompt", "display", "none");
    });
    
    
    
    function hideModal(){
        $.style(".modal", "opacity", "0");
        $.style(".modal-overlay", "opacity", "0");
        $.style("body", "overflow", "auto");
        $.style("body", "height", "100%");
        setTimeout(function(){
            $.style(".modal", "display", "none");
            $.style(".modal-overlay", "display", "none");
        },200);
    }
    
    function showModal(modalID){
        $.style(modalID, "display", "inherit");
        $.style(".modal-overlay", "display", "inherit");
        $.style("body", "overflow", "hidden");
        $.style("body", "height", "0");
        setTimeout(function(){
            $.style(modalID, "opacity", "1");
            $.style(".modal-overlay", "opacity", "1");
        },100);
    }
        
    $.event(".modal-overlay", "click", function(){
        hideModal();
    });
    
    $.event(".modal .close", "click", function(){
        hideModal();
    });
    
    $.event(".cta", "click", function(event){
        event.stopPropagation();
        showModal("#ctamodal");
    });
    
    var first3D = true;
    $.event(".open3d", "click", function(event){
        if (first3D){
            $(".modal .sketchfab-embed-wrapper").innerHTML = '<iframe width="640" height="480" src="https://sketchfab.com/models/41e1ea89a3414f94910264f0e3c868d1/embed" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>';
            first3D=false;
        }
        showModal("#threemodal")
    });
    
    $.style(".intro > .header", "opacity", "1");
    $.style(".drones", "display", "inherit");
    
    
    $.style('.scrollFix', "pointer-events","none");

    $.event('body', 'touchstart', function(e) {
        $.style('.scrollFix', "pointer-events","auto");
    });
    $.event('body', 'touchmove', function(e) {
        $.style('.scrollFix', "pointer-events","none");
    });
    $.event('body', 'touchend', function(e) {
        setTimeout(function() {
            $.style('.scrollFix', "pointer-events", "none");
        },0);
    });
    
    new WOW().init();
});