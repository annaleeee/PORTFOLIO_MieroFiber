 // header_menu_list
 $('.header_menu_list').click(function(){
    $(this).siblings().find('.list').slideUp();
    $(this).find('.list').slideToggle();
});

//section_4_txt_slide
// section_4_con 선언하기
$('.con_txt').hide();

$('.section_4_con').mouseover(function(){
    $('.con_txt').slideUp(600)
    $(this).children('.con_txt').stop().slideDown(600)
}).mouseleave(function(){
    $(this).children('.con_txt').stop().slideUp(600)
});

// go-to-top btn
$('#top_btn').hide();

$(window).scroll(function(){
    if($(this).scrollTop()>500){
        $('#top_btn').fadeIn();
    }
    else{
        $('#top_btn').fadeOut();
    }
})

$('#top_btn').on('click', function(){
    $(window).scrollTop(0);
});