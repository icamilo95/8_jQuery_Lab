$(document).ready(function() {
	$("form").on("keypress", function(e){

		if ($(".secret").val().length < 5 && $(".secret").val().length >= 0) {
				$("#message").show();	
		}  else {
			$("#message-digits").hide();
		}
	});

	$("form").on("click", "#button",function(e){
		$("form").fadeOut(500);
		setTimeout(  function(){
		$("#message-good").fadeIn(1100);
		$("#message-good").removeClass("hidden");
		},500);
	});	
});