
window.onload = function () {

	//delete program item
	var deleteBtn = document.querySelectorAll(".delete");

	for (var i = 0; i < deleteBtn.length; i++) {
		deleteBtn[i].addEventListener("click", function(e) {
			e.preventDefault();
			this.closest("li").remove();
		});
	};

	//custom range slider

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

	//costom select
	$(".js-example-basic-single").select2();

	//tabs
	$("#tabs").tabs();

	//custom input[type="file"]

	var input = document.getElementById("input-file"),
			outPut = document.getElementById("filename");

	input.addEventListener("change", function () {
		var filename = this.value.replace(/.*\\/, "");
		outPut.innerHTML = filename;
	});
};
