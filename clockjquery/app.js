
jQuery(document).ready(function(){
	
	var firstin;
	jQuery(".start").click(function(){
		firstin = setInterval(counter,500);
		function counter(){
			var val= parseInt(jQuery(".counter").text());
			val +=1;
			
			if(val > 5 && val < 10){
				var val2=val*25;
				jQuery(".counter").css({border:'3px solid rgba('+val2+',0,0,1)',color: 'rgba('+val2+',0,0,1)'});
			}
			else if(val == 10){
				val=0;
				stopcounter();
				jQuery(".counter").css({border:'3px solid rgba(0,0,0,1)',color:'black'});
			}
			jQuery(".counter").text(val);
		}
	});

	function stopcounter(){
		clearInterval(firstin);
	}

	jQuery(".stop").click(function(){
		stopcounter();
	});




	jQuery(".startC").click(function(){
		var _h=parseInt(jQuery(".h").val());
		var _m=parseInt(jQuery(".m").val());
		var _s=parseInt(jQuery(".s").val());
		jQuery(".rh").text(_h);
		jQuery(".rm").text(_m);
		jQuery(".rs").text(_s);

		const secondin=setInterval(stopw,500);
		
		function stopw(){

			var _h=parseInt(jQuery(".rh").text());
			var _m=parseInt(jQuery(".rm").text());
			var _s=parseInt(jQuery(".rs").text());
			_s -=1;
			

			if(_s < 0){
				_s =9;
				_m -=1;
				if (_m<0) {
					_m=9;
				}
			}

			jQuery(".rs").text(_s);
			jQuery(".rm").text(_m);

		}


	});



















});