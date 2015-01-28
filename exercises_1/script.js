$(document).ready(function() {

	$("form").on("submit",function(e){
		$("tbody>tr:odd").css("background-color",$(".color").val());
		
	});

	$("form").on("submit",function(e){
		$("tbody>tr:odd").css("background-color",$(".color").val());
		$("tbody>tr:even").css($('.property').val(),$('.value').val());
	});

});