$('#iconified').on('keyup', function() {
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});


$('.screen-sizes-menu li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
 });

 $('.screen-sizes-menu li:first-child').click(function() {
    $('iframe').css(
        {
            'width':'1350px',
            'margin':'0px auto'
        });
    
 });

 $('.screen-sizes-menu li:nth-child(2)').click(function() {
    $('iframe').css(
        {
            'width':'992px',
            'margin':'0px auto'
        });
    
 });
 
 $('.screen-sizes-menu li:last-child').click(function() {

    $('iframe').css(
        {
            'width':'430px',
            'margin':'0px auto'
        });
    
    
 });
 
$(window).resize(function(){


    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.mobile').addClass('active').siblings().removeClass('active');
    } else if ( window.matchMedia('(max-width: 992px)').matches) {
        $('.tablet').addClass('active').siblings().removeClass('active');
    }
    else if ( window.matchMedia('(max-width: 1200px)').matches )
    {
        $('.desktop').addClass('active').siblings().removeClass('active');
    }

  
  });



new WOW().init();