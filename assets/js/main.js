$(document).ready(function () {

	// custom input[type="file"]

	$("input[type=file]").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename").html(filename);
  });

});
