// JavaScript Document
	$(function(){

		$('div.languagebar').clone().appendTo($('.hideBox'));

		//submenu
		$('.dropDown').hover(function(){
			if($(this).parent().hasClass('nav')) return false;
			$(this).find('.submenu').stop(false,true).slideDown(200);
		},function(){
			if($(this).parent().hasClass('nav')) return false;
			$(this).find('.submenu').stop(false,true).slideUp(200);
		});

		//mobile menu
		var $m_menu = $('ul.menu').clone();
		var $top_m_menu = "" ;//$('.topLink').find('.rightBox').children('a').not('.exclude').clone();

		$m_menu.insertAfter('.m_menu .hideBox p.sp_menu').removeClass().addClass('nav').find('b').remove().end().append($top_m_menu).children('a').wrap('<li/>').end().find('li.dropDown').each(function(){
			$(this).children('a').removeClass().append('<i class="fa fa-angle-down" />').attr('href','');
		});

		$('.m_menu').find('a.main').click(function(){
			if(!$(this).parents('.m_menu').hasClass('active')){
				$(this).parents('.m_menu').addClass('active');
				$(this).addClass('show');
				$('.m_menu').find('.mask').fadeIn(100);
				$('.m_menu').find('.hideBox').fadeIn(100);
				$('body').css('overflow','hidden');
				$('.m_menu').find('.mask').click(function(){/*é»žç©ºç™½è™•æ”¶èµ·menu*/
					$('.m_menu').removeClass('active');
					$('.m_menu').find('.hideBox').fadeOut();
					$('.m_menu').find('.mask').fadeOut();
				});
			}else{
				$(this).parents('.m_menu').removeClass('active');
				$(this).removeClass('show');
				$('.m_menu').find('.mask').fadeOut();
				$('.m_menu').find('.hideBox').fadeOut();
				$('body').css('overflow','auto');
			}//end if hasClass

			return false;
		});

		$('.m_menu').find('li.dropDown').children('a').click(function(){
			$(this).siblings().slideToggle();
			return false;
		});

		//mobile classLink
		var $clone = $('ul.classLink').clone().removeClass('classLink'),
			  $current_txt = $('ul.classLink').find('.current').text();
		$('ul.classLink').after('<div class="m_classLink"><a class="main"><b></b><i class="fa fa-angle-down"></i></a></div>');
		$('.m_classLink').append($clone).find('a.main b').text($current_txt);

		$('.m_classLink').click(function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open').find('ul').stop().slideUp(200);
				$(this).find('a.main').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
			}else{
				$(this).addClass('open').find('ul').stop().slideDown(200);
				$(this).find('a.main').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
			}
		});

		//mailLink
		$('.contactLink').click(function(){
			if(isMobile){
				var href = $(this).data('mail');
				window.location.href= 'mailto:'+href;
				return false;
			}
		});






			$(window).scroll(function () {
				var lh = $(window).height()/2;
			    var scrollVal = $(this).scrollTop();
			    if(scrollVal > lh){
					$('.goTop').addClass('showgoTop');
				}else{
					$('.goTop').removeClass('showgoTop');
				}
			});




		//gotop
		$('.goTop').click(function(){
			$('body,html').stop().animate({scrollTop:0});
			return false;
		});

		//module box
		$('.outerWrap').after('<div class="moduleMask"></div>');
		$('.openModule').click(function() {
			var obj = $(this).attr('href');
			var moduleWidth = $(obj).outerWidth() / 2;
			var moduleHeight = $(obj).outerHeight() / 2;
			$(obj).css({
				'margin-left': -moduleWidth,
				'margin-top': -moduleHeight
			}).addClass('show');
			$('.moduleMask').addClass('show');
			$('body').css('overflow','hidden');
			return false;
		});
		$('.moduleMask, .moduleClose').click(function() {
			$('.moduleBox, .moduleMask').removeClass('show');
			$('body').css('overflow','auto');
		});
	});s
