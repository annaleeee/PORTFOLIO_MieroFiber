 // header_menu_list
 $('.header_menu_list').click(function(){
    $(this).siblings().find('.list').slideUp();
    $(this).find('.list').slideToggle();
});

// m_navbar 햄버거 메뉴
$('.m_navbar').hide();

$('.header_m_menu').click(function(){
    $('.m_navbar').slideToggle();
});

$('.dropDown_title').click(function(){
    $(this).siblings().find('.dropDown_list').slideUp();
    $(this).find('.dropDown_list').slideToggle();
});

//section_4_txt_slide
let imgWrap = $('.section_4_con')
let txtWrap = $('.con_txt');

txtWrap.hide();

imgWrap.mouseenter(function(){
    txtWrap.slideUp(600)
    $(this).children('.con_txt').stop().slideDown(500)
}).mouseleave(function(){
    $(this).children('.con_txt').stop().slideUp(500)
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