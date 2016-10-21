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
        setTimeout(function(){
            $.style(".modal", "display", "none");
            $.style(".modal-overlay", "display", "none");
        },200);
    }
    
    function showModal(modalID){
        $.style(modalID, "display", "inherit");
        $.style(".modal-overlay", "display", "inherit");
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
    
    $.event(".open3d", "click", function(event){
        showModal("#threemodal")
    });
    
    $.style(".intro > .header", "opacity", "1");
    
    new WOW().init();
});