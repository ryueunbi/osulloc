$(function(){
    $('.rounded').mouseover(function(){
        $('.rounded1-hover').css('display', 'block')
        $('.rounded').css('opacity', 'none')
    });
    $('.rounded').mouseleave(function(){
        $('.rounded1-hover').css('display', 'none')        
        $('.rounded').css('display', 'block')
    });
});