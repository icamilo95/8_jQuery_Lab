$(document).ready(function() {

	$("form").on("submit", function(e){
		$("ul").append("<li><input type=\"checkbox\" class='check'> " + $('#stuff').val() + " <button class='reset' >Remove</button>" + "</li>").fadeIn(1500);
	});
	$("ul").on("click", ".check" , function(e){
		$(this).parent().toggleClass("completed");
		});

	$("ul").on("click", ".reset" , function(e){
		$(this).parent().fadeOut(500);		
	});
	$("ul").on("dblclick", function(e){
		$("li").fadeOut(500);
	});
});