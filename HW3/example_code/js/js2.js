onscroll = function() {
		    var scrollTop = document.documentElement.scrollTop;
		    if (scrollTop > 250) {
		        $(".header").hide();
		     } else {
		        $(".header").show();
		    }
		}
