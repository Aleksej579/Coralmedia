;(function($) {

	$(document).ready(function() {
		var btnAbout = $('.btns-about span.btn-about');
		btnAbout.on('click',function() {
			$(this).closest('.wrap').addClass('visib-block');
			$(this).hide();
			$(this).siblings('.ili').hide();
		});
		//
		$('.meet-the-crew .wrap').owlCarousel({
			loop:true,
			nav:true,
			pagination:false,
			navigationText: false,
			autoHeight: true,
			responsive:{
				0:{
						items:1,
				},
				600:{
						items:1,
				},
				1000:{
						items:2,
				},
				slideBy: 2,
			}
	});
		//
		$(".fancybox").fancybox({
				openEffect	: 'none',
				closeEffect	: 'none',
				helpers: {
				    overlay: {
				      locked: false
				    }
				  }
		});
		//
		$('#about-us').on('click','.col', function(e) {
			var thisLink = $(this).find('a').attr('href');
			swal({   
				title: "Are you sure?",
				text: "What you want to link to!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#4c9390",
				confirmButtonText: "Yes, go!",
				cancelButtonText: "No!",
				closeOnConfirm: true,
				closeOnCancel: true
			}, 
			function(isConfirm){
				if (isConfirm) {
					window.location = thisLink;
				} else {
					swal.close();
				} 
			});
				$('.sweet-alert.showSweetAlert').prepend('<a class="sweet growler-close"><i class="icon-close"></i></a>');

				$('.sweet.growler-close,.sweet-overlay').on('click',function() {
					swal.close();
				});
			e.preventDefault();
		});

		$(".fancybox1 .wrap-text").fancybox({
			helpers: {
			    overlay: {
			      locked: false
			    }
			  },
			afterClose : function(){
				$(".fancybox1 .wrap-text").show();
			}
		});
		//
		$('.order-callback').on('click',function() {
			$(this).parent().toggleClass('on');
		});
		//
		$('.wrap-call .number').keyup(function() {
			var webformVal = $(this);

			if( webformVal.val() == "" ) {
				webformVal.closest('.wrap-call').removeClass('no-empty').addClass('empty');
			} else {
				webformVal.closest('.wrap-call').removeClass('empty').addClass('no-empty');
			}
		});
		//
		$('.wrap-call .icon-cancel').on('click',function() {
			$(this).closest('.wrap-call').removeClass('on');
		});
		//
		$('.wrap-call .number').on("change keyup input click", function() {
			if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});
		//

		$(".phone-number").on("change keyup input click", function() {
			if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});
		// форма отправки контакты
		$('#gform_1').on('submit', function() {

			var errors = false;

			var emailField = $(this).find('#input_1_2');

			emailField.empty();

			if( $.trim( emailField.val() ) == '' ) {
				errors = true;
				emailField.siblings('.field-required').text( '*' );
			}

			if( !errors ){
				$.ajax({
					url: '../php/form.php',
					type: 'POST',
					data: new FormData(this),
					contentType: false,
					cache: false,
					processData:false,
					beforeSend: function(){
						$('#gform_submit_button_1').next().addClass('circ');
					},
					success: function(res){
						if( res == 1 ){
							$('#gform_1').find('.field-form').val('');
							$('#gform_submit_button_1').next().removeClass('circ');
							swal("Success!", "Form has been sent!", "success");
						} else {
							$('#gform_1').find('.field-form').val('');
							$('#gform_submit_button_1').next().removeClass('circ');
							swal("Oops!", "An error has occurred!", "error");
						}
					},
					error: function(error){
						swal("Oops!", "An error has occurred!", "error");
						$('#gform_submit_button_1').next().removeClass('circ');
					}
				});
			}

			return false;
		});

		// форма оставте запрос
		$('#gform_2').on('submit', function() {

			var req = false;

			var reqInput = $(this).find('input.medium');

			reqInput.empty();

			if( $.trim( reqInput.val() ) == '' ) {
				req = true;
				reqInput.siblings('.require-request').text('*');
			}

			if( !req ) {
				dataRequest = $('#gform_2').serialize();
				$.ajax({
					url: '../php/request.php',
					type: 'POST',
					data: dataRequest,
					beforeSend: function() {
						$('#gform_2').find('#gform_submit_button_2').siblings().addClass('circ');
					},
					success: function(res) {
						if( res == 1 ) {
							$('#gform_2').find('.medium').val('');
							$('#gform_2').find('#gform_submit_button_2').siblings().removeClass('circ');
							swal("Success!", "Form has been sent!", "success");
						} else {
							$('#gform_2').find('#gform_submit_button_2').siblings().removeClass('circ');
							swal("Oops!", "An error has occurred!", "error");
						}
					},
					error: function() {
						$('#gform_2').find('#gform_submit_button_2').siblings().removeClass('circ');
						swal("Oops!", "An error has occurred!", "error");
					}
				});
			}

			return false;
		});

		//
		$('.ratings_stars').hover(
			function() {
				$(this).prevAll().andSelf().addClass('ratings_over');
			},
			function() {
				$(this).prevAll().andSelf().removeClass('ratings_over');
			}
		);
		//send ajax request to rate.php
		$('.ratings_stars').on('click', function() {
			var id=$(this).parent().attr("id");
			var num=$(this).attr("class");
			var poststr="id="+id+"&stars="+num;
			$.ajax({
				url:"../php/rate.php",
				cache:0,
				data:poststr,
				success:function(result) {
					document.getElementById(id).innerHTML=result;
				}
			});
		});
		//
		var digitVote = $('.digit-vote').text(),
				voteText = $('.vote-text');

		digitVote = parseInt(digitVote);

		voteText.html('<span>' + declOfNum(digitVote,['vote','vote','vote']) + '</span>')

		$(document).ajaxComplete(function(event, xhr, settings) {

			var digitVote = $('.digit-vote').text(),
					voteText = $('.vote-text');

			digitVote = parseInt(digitVote);

			voteText.html('<span>' + declOfNum(digitVote,['vote','vote','vote']) + '</span>');
		});
		// cкролл к нижней форме
		$('.btn.callback').localScroll();

	});

	function whail(){
		var pos = $(window).scrollTop();
		$('#slide1').each(function() {
			var element = $(this);
			var height = element.height();
			$(this).css({'background-position': Math.round((pos - height) * 0.09) + '% ' + Math.round((pos - height) * 0.02) +'%'
});
		});
	};
		function midWhail(){
			var pos = $(window).scrollTop();
			$('#slide1').each(function() {
				var element = $(this);
				var height = element.height();
				$(this).css({'background-position': Math.round((pos - height) * 0.09) + '% ' + Math.round((pos - height) * 0.02) +'%'
	});
			});
		};
			function bigWhail(){
				var pos = $(window).scrollTop();
				$('#slide1').each(function() {
					var element = $(this);
					var height = element.height();
					$(this).css({'background-position': Math.round((pos - height) * 0.09) + '% ' + Math.round((pos - height) * 0.02) +'%'
		});
				});
			};

	// waypoint digits
	$('.wrap-digit')
		.waypoint(function(dir) {
				if( dir == 'down' ) {
					$('.digits .wrap-digit').prepend('<svg id="num-year"></svg><svg id="num-success"></svg><svg id="num-let"></svg>')
					num();
				}
		}, {
			offset: '90%'
		})
		.waypoint(function(dir) {
				if ( dir == 'up' ) {
					$('.digits .wrap-digit svg').remove();
				}
		},{
			offset:"90%"
		});

		// waypoints whail
		$('#about-us')
			.waypoint(function(dir) {
				console.log( dir );
					if( dir == 'down' ) {
						$(window).on('scroll', whail);
					}
			}, {
				offset: '100%'
			});

		// sticki price
		$('body .stick-price a').on('click',function() {
			$('#growler').velocity({
				right: 0
			},{
				duration: 1200,
				easing: 'easeOutExpo'
			}).addClass('open');
			return false;
		});

		//
		$('#fileuploader').on('click',function() {
			$(this).siblings().trigger('click');
		});
		//

		$(window).on('load resize click', function() {
			if( $(window).width() < 767 ) {
				if( !$('.levelHolderClass').children().hasClass('mobile-header') ) {
					$('div.mobile-header').prependTo('.levelHolderClass');
				}
				$('#mobile-navigation_multilevelpushmenu').on('click','.close-menu',function() {
					$('html').addClass('menu-collapsed').removeClass('menu-expanded');

					$('#mobile-navigation').animate({"height": "5205px", "width": "0px", "minHeight":"5205px", "minWidth":"0px"},1);
					$('#mobile-navigation_multilevelpushmenu').animate({"height":"620px","minHeight":"5205px","minWidth":"0px"},1);

					var width = $(window).width();
					$('.levelHolderClass').animate({"marginRight":-width,"width":width,"min-width":width},200);
					
				});
			}
		});

})(jQuery);

	function declOfNum(number, titles) {
		cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	}
