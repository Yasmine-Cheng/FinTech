onscroll = function() {
		    var scrollTop = document.documentElement.scrollTop;
		    if (scrollTop > 250) {
		        $(".header").hide();
		        $('#gotop').fadeIn();
		     } else {
		        $(".header").show();
		        $('#gotop').fadeOut();
		    }
		}