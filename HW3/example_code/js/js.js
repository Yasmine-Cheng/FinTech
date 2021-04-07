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
function alert1(){
	if(confirm("若無完整填寫，可能無法了解您的建議內容及正確傳送喔~請再次確認"))
		alert("Loading...");
	else{
		event.stopPropagation(init());
	}
}
var initSubject='',initBody='';	
	function submitHandler(){
		var to = "mian12080916@gmail.com";
		var name = setname.value;
		var email = setemail.value;
		var subject = setsubject.value;
		var body = "來自部落格的訊息唷~~~"+'%0A%0A%0A';
		body += ""+messagebox.value+'%0A';
		body += "From："+setname.value+'%0A';
		mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
		mailTo.click();
	}

	function init(){
		messagebox.value=initSubject;
		toText.value=initTo;
		messagebox.value=initBody;
	}