$(document).ready(function () {
        
    "use strict";
    
    $("[name=phone]").mask("+7(999) 999-99-99");
    
    //    Фиксированное верхнее меню
     jQuery(function($) {
         var heightHead = $('.header-top').outerHeight();
         var heightNav = $('nav.titul').outerHeight();
	        $(window).scroll(function(){
	            if($(this).scrollTop() > heightHead){
	                $('#header').addClass('fixed');
                    $('nav').css('display', 'none');
                    $('body').css('padding-top', (heightHead + heightNav));
                    $('.sear-bl').css('display', 'inline-block');                  
	            }
	            else if ($(this).scrollTop() < heightHead ){
	                $('#header').removeClass('fixed');
                    $('body').css('padding-top', '0px');
                    $('nav.titul').css('display', 'block');
                    $('.sear-bl').css('display', 'none');
	            }
	        });
	    });
    



    $(".modal-open,.modal-backdrop").click(function () {
        $(".modal-header .close").click();
    });
    
    //    Треуголник в верхнем черном меню
    $('.gender').click(function(){
        var typeGender = $(this).attr('data-filter');
        if (typeGender == 'man'){
            $('.arr').animate({ 'left' : '140px'}, 200);
            $('nav .menu-man').css('display', 'block');
            $('nav .menu-woman').css('display', 'none');
            $('nav').css('display', 'block');
        }else{
            $('.arr').animate({ 'left' : '25px'}, 200);
            $('nav .menu-man').css('display', 'none');
            $('nav .menu-woman').css('display', 'block');
            $('nav').css('display', 'block');
        }
        $('nav').removeClass().addClass(typeGender);
    });
    
    //    Кнопка с выбором размера для товара
    $('.size span').click(function(){
        $(this).toggleClass('active');
        $(this).parent('div').siblings('.btn').addClass('active');
       if ($('.size span').hasClass('active')){
          $(this).parent('div').siblings('.btn').removeAttr('disabled'); 
       }else{                   $(this).parent('div').siblings('.btn').attr('disabled','disabled').removeClass('active');;     
      
       }    
    });
    
    
    //    Слайдер на титульнике
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2,  
        slidesToScroll: 2, 
        cssEase: 'easeInBack',
        autoplay: true,
        autoplaySpeed: 10000,
        rows: 2,
            responsive: [
                {
                breakpoint: 1250,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                        }
                },
//                {
//                breakpoint: 768,
//                settings: {
//                slidesToShow: 2,
//                slidesToScroll: 2,
//                infinite: true,
//                rows: 2,
//                        }
//                }
            
            
            ] 
 
    });
    
    //    Слайдер в карточке товара
    $('.multiple-items-2').slick({
        infinite: true,
        slidesToShow: 4,  
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 8000,
            responsive: [
                {
                breakpoint: 1205,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
             }
    },
                {
                breakpoint: 960,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
             }
    },
                {
                breakpoint: 660,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
             }
    }
            ] 
 
    });
    
    
     //    Select  для сортировки
    $('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

  });
    
//    accordion

  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #accordion2, #accordion3, #accordion4, #accordion-menu, #accordion-menu2, #accordion-mini-menu, #accordion-mini-menu2, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
    
 //    ползунок  
    $(function() {
        
        function slide(event, ui) {
    // Allow time for exact positioning
   setTimeout(function () {
       $(ui.handle).attr('title', ui.value).tooltip('fixTitle').tooltip('show');
   }, 0);
}
function create(event, ui, start, end) {
   var handles = $(event.target).find('span');
   handles.eq(0).tooltip({
       animation: false,
       placement: 'bottom',
       trigger: 'manual',
       container: handles.eq(0),
       title: start
   }).tooltip('show');
   handles.eq(1).tooltip({
       animation: false,
       placement: 'bottom',
       trigger: 'manual',
       container: handles.eq(1),
       title: end
   }).tooltip('show');
}
        
        
		$('#price').change(function () {
		var val = $(this).val();
		$('#slider_price').slider("values",0,val);
		});	
		
		$('#price2').change( function() {
			var val2 = $(this).val();
			$('#slider_price').slider("values",1,val2);
		});
	
		$( "#slider_price" ).slider({
			range: true,
			//orientation: "vertical",
			min: 0,
			step:10,
			max: 15000,
			values: [ 2000, 10000 ],
            slide: function (event, ui) {
                $('#price').val(ui.values[0]);
			    $('#price2').val(ui.values[1]);
                slide(event, ui)
            },
            create: function (event, ui) {
                create(event, ui, $(this).slider('values', 0), $(this).slider('values', 1))
            }
            
		});
		//$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			//" - $" + $( "#slider-range" ).slider( "values", 1 ) );
			$('#price').val($('#slider_price').slider("values",0));
			$('#price2').val($('#slider_price').slider("values",1));
	});
    
    
    //    scrollbar
    $('.scrollbar-rail').scrollbar();
    
    
    //    слайдер для карточки товара
     $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    dots: true,
    vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for', 
  centerMode: true,
  focusOnSelect: true,
     responsive: [
                {
                breakpoint: 1292,
                settings: {
                vertical: false,
                slidesToShow: 4,
             }
                    
    },
     {
                breakpoint: 460,
                settings: {
                vertical: false,
                slidesToShow: 3,
             }
                    
    }
     
     ] 
  

});
	//    zoom картинки
    $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
    
    
    //    fancybox
    $(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
    
    

  //    количество товаров в корзине  
    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">&ndash;</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max'),
        curValue = parseFloat(input.val());
        
        if(curValue == min){
           btnDown.css('background-color', '#c4c4c4');
           }


      btnUp.click(function() {

        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
         var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;  
            btnDown.css('background-color', '#121212'); 
        }

        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if ((oldValue-1) <= min) {
          var newVal = min;
             btnDown.css('background-color', '#c4c4c4'); 
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");

      });

    });
    
        
//    скрытый блок для системы оплаты
            $('.show-ic').click(function() {
            $(this).closest('.pay-item').find('.ic-info').css('display', 'block');
        });
            $('.hide-ic').click(function() {
            $(this).closest('.pay-item').find('.ic-info').css('display', 'none');
        });
    
    
//    скрытый блок ВХОД   
        $('.enter').click(function(event) {
            event.preventDefault();
           $('.enter-form').show();
            
        });
        $('.enter-form .close').click(function() {
           $('.enter-form').hide();
        });
    
    //    скрытый блок  ПОИСК  (в меню)
        $(".setting").click(function() {
        $('.search-form-1').toggle();
            });
        $(document).on('click', function(e) {
        if (!$(e.target).closest(".search").length) {
            $('.search-form-1').hide();
        }
        e.stopPropagation();
        });
    
        //    скрытый блок  ПОИСК  (в хедере)
        $(".sear2").click(function() {
        $('.search-form-2').toggle();
            });
        $(document).on('click', function(e) {
        if (!$(e.target).closest(".sear-bl").length) {
            $('.search-form-2').hide();
        }
        e.stopPropagation();
        });
    
    
    //    скрытый блок О компании  
         $('.gumb').click(function() {
           $('.gumb-company').show();
            
        });
        $('.gumb-company .close').click(function() {
           $('.gumb-company').hide();
        });
    
    
        //    скрытый блок МОБ МЕНЮ  
        $('.gumb-mob-menu').click(function() {
           $('.mob-menu').toggleClass('show');
            
        });
        $('.mob-menu .close').click(function() {
           $('.mob-menu').removeClass('show');
        });
//        $(document).on('click', function(e) {
//        if (!$(e.target).closest(".mob-menu-1").length) {
//            $('.mob-menu').removeClass('show');
//        }
//        e.stopPropagation();
//        });
    
    
    //Открывает при нажатии + скрытое подменю
    $('.submenu2 .submenu3').hide();
    $('.submenu2 a.carret1').toggle(
      function(){
        $(this).siblings('.submenu3').stop(false, true).slideDown(100);
          $(this).siblings('.open-list').addClass('active');
          $(this).addClass('active');
      },
     function(){
        $(this).siblings('.submenu3').stop(false, true).slideUp(100);
         $(this).siblings('.open-list').removeClass('active');
         $(this).removeClass('active');
     }
   );

    
        //Схлопывает разделы фильтра
    $('.filt-section .param-bl').show();
    $('.filt-section .minus').toggle(
        function(){
        $(this).siblings('.param-bl').stop(false, true).slideUp(150);
         $(this).addClass('plus');
     },
      function(){
        $(this).siblings('.param-bl').stop(false, true).slideDown(150);
          $(this).removeClass('plus');
      }
     
   );
    
    //белый треугольник в подменю
    $('nav li.m-item > a').hover(function(){
        if($(this).siblings('div').hasClass('sub-menu')){
            $(this).addClass('active-link');   
        }
    });
    
    
    //Подписка
//    $("#subs-form").modal('show');
    

    
    $(window).load(function() {
    if($(window).width() > 995) {
        $("#subs-form").modal('show');
    }
        });
    
    
    //Таблица внутрення в ЛК
     $('.show-table').click(function(){
        
        var tableInner = $(this).parent('tr').next('tr');

          $(tableInner).toggle();
         
         if ($(tableInner).is(':visible')) {
             $(this).find('.carret').addClass('active');
              $(this).find('.show-text').text('Свернуть');  
             $(this).parent('tr').css('background-color', '#fafafa');
            }
         else {
             $(this).find('.carret').removeClass('active');
             $(this).find('.show-text').text('Развернуть');
              $(this).parent('tr').css('background-color', '#fff');
         }
    });

    
    

});



