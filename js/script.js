(function($){
	var yDisplayNav = 150;

	// Navigation link
	$('.navbar a').on('click', function(e){
		e.preventDefault();
		// get the href
		var href = $(this).attr('href');
		var offset = $(href).offset();
		console.log(offset.top);

    $("html, body").animate({scrollTop : offset.top},500);
	})

// worklink
$("#work .span4").on("click", function(){
	/*if($('img', this).hasClass('flipOutY')){
		$('img', this).addClass('animated flipInY').delay(900).removeClass('flipInY');
		$('.content', this).addClass('animated flipOutY').delay(900).removeClass('flipOutY');
	}else{*/
	var self = this;
	if($(this).hasClass('open')){
		$('img', this).addClass('animated flipInY');
		$('.content', this).addClass('animated flipOutY');

		window.setTimeout(function(){
			$(self).removeClass('open');
			$('img', self).removeClass('flipInY');
			$('.content', self).removeClass('flipOutY');
		}, 900);

	}else{
		$('img', this).addClass('animated flipOutY');
		$('.content', this).addClass('animated flipInY');

		window.setTimeout(function(){
			$(self).addClass('open');
			$('img', self).removeClass('flipOutY');
			$('.content', self).removeClass('flipInY');
		}, 900);
	}
});

$("#work .span4 .close").on("click", function(){
	 	var content = $(this).parent();
		console.log('click '+content.attr('class'));
		content.removeClass('flipInY');
		//$('img', span4).addClass('animated flipInY');
	//})
});

// SCROLLING
	$(window).scroll(function () {
		onScroll()
	});
	
	onScroll();

	function onScroll(){
		var topNavBar = 0;
		topNavBar = $(window).scrollTop() - yDisplayNav;
		if(topNavBar>0){
			topNavBar = 0;
		}
		$('.navbar').css('top', topNavBar);

		$('.navbar a').each(function(){
      if($($(this).attr('href')).offset()){
        var offsetTop = $($(this).attr('href')).offset().top;
        if(offsetTop<$(window).scrollTop()+200){
          $('.navbar li.active').removeClass('active');
          $(this).parent().addClass('active');
          hash = $(this).attr('href');
        }
      }
		});
    if(hash!=window.location.hash){
    	window.history.replaceState({}, {}, window.location.search + hash);
    }
	}
})(jQuery)
