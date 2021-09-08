$(document).ready(function(){
	console.log($(document).width());
	if($(document).width()>600){
		$('.index-wall-w').height($('#Layer_1').outerHeight()+$('#Layer_3').outerHeight()*2);
		$('.index-w-ctrl').height($('#Layer_3').outerHeight());
	} else{
		$('.index-wall-w').height($('#Layer_5').outerHeight());
	}
	$('#Layer_1').addClass("svg-visible");
	$('#Layer_2').addClass("svg-hidden");
	$('#Layer_3').addClass("svg-visible");
	$('#Layer_4').addClass("svg-hidden");
	$('.index-w-ctrl').hover(function(){
		$('#Layer_1').switchClass("svg-visible", "svg-hidden", 500, "swing");
		$('#Layer_2').switchClass("svg-hidden", "svg-visible", 500, "swing");
		$('#Layer_3').switchClass("svg-visible", "svg-hidden", 500, "swing");
		$('#Layer_4').switchClass("svg-hidden", "svg-visible", 500, "swing");
	}, function(){
		$('#Layer_2').switchClass("svg-visible", "svg-hidden", 500, "swing");
		$('#Layer_1').switchClass("svg-hidden", "svg-visible", 500, "swing");
		$('#Layer_4').switchClass("svg-visible", "svg-hidden", 500, "swing");
		$('#Layer_3').switchClass("svg-hidden", "svg-visible", 500, "swing");
	});
});
function tdclick(url){
	console.log("function called");
	console.log(url);
	window.location.href = url;
};
function sso(){
	window.location = "https://gymkhana.iitb.ac.in/sso/oauth/authorize/?client_id=HcMY0HsFyALgYxvQM9l8RgpzQLd8yRQcoFl7Hub0&response_type=token&scope=profile ldap phone program";
};
 