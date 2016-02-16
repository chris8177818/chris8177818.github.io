$(document).ready(function() {
	$("#vegOn").click(function(event) {
		//$("li.fish").remove();
		$("li.fish").parent().parent().remove();
	});
});