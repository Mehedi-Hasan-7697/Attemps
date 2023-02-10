
jQuery(document).ready(function(){

	jQuery(".menu ul ul").parent("li").children("a").append("&nbsp;<i class='fa fa-angle-down'></i>");

	jQuery(".menu ul li").mouseenter(function(){
		jQuery(this).children("ul").slideToggle();
	});
	jQuery(".menu ul li").mouseleave(function(){
		jQuery(this).children("ul").slideUp();
	});
	jQuery(".open").click(function(){
		jQuery(".menu").show();
		jQuery(".close").show();
		jQuery(".open").hide();
	});
	jQuery(".close").click(function(){
		jQuery(".menu").hide();
		jQuery(".close").hide();
		jQuery(".open").show();
	});
	var width=jQuery("body").width();
	if (width < 768) {
		jQuery(".menu").hide();
		jQuery(".open").show();
		jQuery(".close").hide();
	}
	else{
		jQuery(".menu").show();
		jQuery(".open").hide();
		jQuery(".close").hide();
	}
	jQuery(window).scroll(function(){
		var top=jQuery(window).scrollTop();
		if (top> 178) {
			jQuery(".menu").addClass("fixed");
			jQuery(".top").fadeIn();
		}
		else{
			jQuery(".menu").removeClass("fixed");
			jQuery(".top").fadeOut();
		}
	});
	jQuery(".top").click(function(){
		jQuery("html").animate({scrollTop:'0'});
	});

});