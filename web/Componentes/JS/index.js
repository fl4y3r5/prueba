/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel({
        fullWidth: true,
        padding: 30
    });
    $('.slider').slider();
    $(".dropdown-trigger").dropdown();
    
    $(window).scroll(function () {
        if($(window).scrollTop()>50){
            $('nav').addClass('blue darken-3');
        }else{
            $('nav').removeClass('blue darken-3');
        }
    });
});
  
  