
window.onload = function () {

	//custom input[type="file"]

	var input = document.getElementById("input-file"),
			outPut = document.getElementById("filename");

	if (input !== null) {
		input.addEventListener("change", function () {
			var filename = this.value.replace(/.*\\/, "");
			outPut.innerHTML = filename;
		});
	}

	//select exercise

	var exerciseArr = document.querySelectorAll(".template-exercises ol li");
	
	if (exerciseArr.length > 0) {
		for (var i = 0, len = exerciseArr.length; i < len; i++) {
			exerciseArr[i].addEventListener('click', function () {
				this.classList.toggle('active');
			});
		};
	};


	//edit program

	// var editBtn = document.querySelector(".edit-name");

	// if (editBtn !== null) {
	// 	editBtn.addEventListener('click', function(e) {
	// 		e.preventDefault();
	// 		var target = document.querySelector(".program-setting");
	// 		target.classList.toggle('active');
	// 	});
	// };


	//delete program item
	var deleteBtn = document.querySelectorAll(".delete");

	for (var i = 0; i < deleteBtn.length; i++) {
		deleteBtn[i].addEventListener("click", function(e) {
			e.preventDefault();
			this.parentElement.parentElement.remove();
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
			'max': [ 10 ]
		}
	});

	var outputRange1 = document.getElementById('range1-output');

	range1.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		outputRange1.value = Math.round(value);

		//you can write additional function here, which will work after slider changed


	});

	noUiSlider.create(range2, {
		start: [ 5 ],
		connect: [false, true],
		range: {
			'min': [  1 ],
			'max': [ 10 ]
		}
	});

	var outputRange2 = document.getElementById('range2-output');

	range2.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		outputRange2.value = Math.round(value);	
	});

	noUiSlider.create(range3, {
		start: [ 1 ],
		connect: [false, true],
		range: {
			'min': [  1 ],
			'max': [ 5 ]
		}
	});

	var outputRange3 = document.getElementById('range3-output');

	range3.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		outputRange3.value = Math.round(value);	
	});

	noUiSlider.create(range4, {
		start: [ 3 ],
		connect: [false, true],
		range: {
			'min': [  1 ],
			'max': [ 10 ]
		}
	});

	var outputRange4 = document.getElementById('range4-output');

	range4.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		outputRange4.value = Math.round(value);	
	});

	//costom select
	$(".js-example-basic-single").select2();

	//tabs
	$("#tabs").tabs();

	//sortable exercises
	$(".template-exercises ol").sortable({
		handle: ".move"
	});
};
