$(document).ready(function () {

	// custom input[type="file"]

	$("input[type=file]").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename").html(filename);
  });

});

window.onload = function () {

	var range1 = document.getElementById('range1'),
			range2 = document.getElementById('range2'),
			range3 = document.getElementById('range3'),
			range4 = document.getElementById('range4');

	noUiSlider.create(range1, {
		start: [ 2 ],
		connect: [false, true],
		range: {
			'min': [  1 ],
			'max': [ 7 ]
		}
	});

	noUiSlider.create(range2, {
		start: [ 18 ],
		connect: [false, true],
		range: {
			'min': [  2 ],
			'max': [ 30 ]
		}
	});

	noUiSlider.create(range3, {
		start: [ 3 ],
		connect: [false, true],
		range: {
			'min': [  1 ],
			'max': [ 7 ]
		}
	});

	noUiSlider.create(range4, {
		start: [ 5 ],
		connect: [false, true],
		range: {
			'min': [  1 ],
			'max': [ 7 ]
		}
	});
};
