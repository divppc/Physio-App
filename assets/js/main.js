$(document).ready(function() {

	//colapse right side
	$('.right-panel .collapse-panel').on('click', function () {
		$('.right-panel').toggleClass('collapsed');
	});

	$('.panel-tabs a').on('click', function (e) {
		e.preventDefault();
		if ($('.right-panel').hasClass('collapsed')) {
			$('.right-panel').removeClass('collapsed');
		}		
	});

	//colapse user side
	$('.user-side .collapse-btn').on('click', function() {
		$('.user-side').addClass('collapsed');
	});

	$('.user-side .collapse-panel').on('click', function() {
		$('.user-side').toggleClass('collapsed');
	});

	//colapse right sidebar side
	$('.side-panel .collapse-panel').on('click', function() {
		$('.side-panel').addClass('collapsed');
		$('.collapse-sidebar').removeClass('hidden');
	});

	$('.collapse-sidebar').on('click', function () {
		$(this).addClass('hidden');
		$('.side-panel').removeClass('collapsed')
	});

	//modal article preview
	$('.article-preview').on('click', function() {
		$('body').addClass('modal-open');
		$('.modal.article-preview-modal').addClass('active');
	});

	//close modal
	$('.modal-footer .close-modal').on('click', function() {
		$('body').removeClass('modal-open');
		$('.modal').removeClass('active');
	});

	//edit card
	$('.desk .edit').on('click', function (e) {
		e.preventDefault();
		$('.desk').toggleClass('edited');
	})

	//edit function for team member on new team template
	var editBtn = $('.edit-member');
	if(editBtn.length !== 0) {
		editBtn.on('click', function (e) {
			var currentRow = $(this).closest('tr');
			$(currentRow).toggleClass('edited-row');
			$(this).toggleClass('active');
		});
	}

	//delete member from table
	var deleteMember = $('.delete-member');
	if(deleteMember.length !== 0) {
		deleteMember.on('click', function () {
			var currentRow = $(this).closest('tr');
			$(currentRow).remove();
		});
	}

	//change role for team member
	var roles = $('.select-holder select');
	if(roles.lenght !== 0) {
		roles.on('change', function (e) {
			var choosenRole = $(this).val();
			var choosenAttr = $('option:selected', this).attr('data-role');
			var	roleHolder = $(this).parent().siblings('.member-role');
			roleHolder.html(choosenRole).attr('data-role', choosenAttr);
		});
	}

	//show panel 'add new member'
	var addBtn = $('.panel .add-btn');
	if(addBtn.lenght !== 0) {
		addBtn.on('click', function () {
			$(this).toggleClass('active');
			$('.member-form').slideToggle();
		});
	}

	// exercise parts and types display
	$('.section-subheading .view-toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().siblings('.list-of-buttons').toggleClass('active');
	});

	//tabs
	$("#tabs").tabs();
	
	//toggle between unser invite steps
	var nextStep = $('.add_user_btn'),
			prevStep = $('.back-btn'),
			step1 = $('.invite-container .step1'),
			step2 = $('.invite-container .step2');

	$(nextStep).on('click', function(e) {
		e.preventDefault();
		step1.removeClass('active');
		step2.addClass('active');
	});

	$(prevStep).on('click', function(e) {
		e.preventDefault();
		step2.removeClass('active');
		step1.addClass('active');
	})

	var programsSlider = $(".programs-slider");

  if (programsSlider.length > 0) {
    $(programsSlider).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      autoplay: false,
      prevArrow: '.arrow-left',
      nextArrow: '.arrow-right'
		});
  };

  //custom input number
  var moreBtn = $('.controls .more'),
  		lessBtn = $('.controls .less');

  moreBtn.on('click', function(e) {
  	e.preventDefault();
  	var input = $(this).parent().siblings('input'),
  			currentValue = input.val();
  	input.val(++currentValue);
  });

  lessBtn.on('click', function(e) {
  	e.preventDefault();
  	var input = $(this).parent().siblings('input'),
  			currentValue = input.val();
  			if (currentValue-1 !== 0) {
  				input.val(--currentValue);
  			}
  });

  $("#start-date").datepicker();

});



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

	//add exercise - file uploads overlay
	var submitExerciseBtn = document.querySelector(".save-exercise input");
	if(submitExerciseBtn) {
		submitExerciseBtn.addEventListener("click", function(e) {
			e.preventDefault();

			var exerciseName = document.getElementById("exercise-name"),
					overlay = document.querySelector(".file-uploads");

			if (exerciseName.value <= 0) {
				exerciseName.classList.add("error");
			} else {
				exerciseName.classList.remove("error");
				overlay.classList.add("active");
			}
		});
	}

	

	//select exercise

	var exerciseArr = document.querySelectorAll(".template-exercises ol li");
	
	if (exerciseArr.length > 0) {
		for (var i = 0, len = exerciseArr.length; i < len; i++) {
			exerciseArr[i].addEventListener('click', function (e) {

				for (var j = 0, len2 = exerciseArr.length; j < len2; j++) {
					exerciseArr[j].classList.remove('active');
				};

				this.classList.add('active');
				var exerciseName = this.querySelector("span").innerHTML,
						exerciseNameHolder = document.querySelector(".program-name h1");
				exerciseNameHolder.innerHTML = exerciseName;
			});
		};
	};

	//remove tag

	var removeTagBtn = document.querySelectorAll(".tag i");

	if (removeTagBtn) {
		for (var i = 0, len = removeTagBtn.length; i < len; i++) {
			removeTagBtn[i].addEventListener("click", function (e) {
				this.parentElement.remove();
			});
		};
	}


	//program modal
	var modalBtn = document.querySelector(".preview .play-btn"),
			modalWindow = document.querySelector(".modal.list"),
			closeModalList = document.querySelector(".list .close-modal");

	if (modalBtn && modalWindow) {

		modalBtn.addEventListener("click", function(e) {
			e.preventDefault();
			document.body.classList.add("modal-open");
			modalWindow.classList.add('active');
		});

		closeModalList.addEventListener("click", function () {
			document.body.classList.remove("modal-open");
			this.parentElement.parentElement.classList.remove("active");
		});
	};

	//modal video

	var videoBtn = document.querySelectorAll(".video-holder"),
			videoModal = document.querySelector(".modal.video"),
			closeModalVideo = document.querySelector(".video .close-modal");

	if (videoBtn && videoModal) {
		for (var i = 0, len = videoBtn.length; i < len; i++) {
			videoBtn[i].addEventListener("click", function (e) {
				e.preventDefault();
				videoModal.classList.add("active");
			})
		};

		closeModalVideo.addEventListener("click", function () {
			this.parentElement.parentElement.classList.remove("active");
			jwplayer().stop()
		});
	}


	//delete program item
	var deleteBtn = document.querySelectorAll(".delete");

	for (var i = 0; i < deleteBtn.length; i++) {
		deleteBtn[i].addEventListener("click", function(e) {
			e.preventDefault();
			this.parentElement.parentElement.remove();
		});
	};


	//edit basic details on general settings page

	var editDetailsFunc = function(inputs, control) {
		if(control == "edit") {
			for (var i = 0, len = inputs.length; i < len; i++) {				
				inputs[i].removeAttribute('disabled');
			}			
		} else if (control == "save") {
			for (var i = 0, len = inputs.length; i < len; i++) {				
				inputs[i].setAttribute('disabled', 'disabled');
			}
		}
	};

	var editDetailsBtn = document.getElementById("edit-details");
	var inputs = document.querySelectorAll(".details .editable-input");
	var saveDetailsBtn = document.getElementById("save-details");
	var detailsContainer = document.querySelector('.details');

	if (editDetailsBtn) {
			editDetailsBtn.addEventListener("click", function (e) {
			e.preventDefault();
			saveDetailsBtn.classList.add("active");
			detailsContainer.classList.add("edited");
			editDetailsFunc(inputs, "edit");
		});
	};

	if (saveDetailsBtn) {
		saveDetailsBtn.addEventListener("click", function (e) {
			e.preventDefault();
			saveDetailsBtn.classList.remove("active");
			detailsContainer.classList.remove("edited");
			editDetailsFunc(inputs, "save");
		});
	};

	//edit opening hours on general settings page

	var editHoursBtn = document.getElementById("edit-hours");
	var selects = document.querySelectorAll(".worktime select");
	var saveHoursBtn = document.getElementById("save-hours");
	var worktimeTable = document.querySelector('.worktime')

	if (editHoursBtn) {
			editHoursBtn.addEventListener("click", function (e) {
			e.preventDefault();
			saveHoursBtn.classList.add("active");
			worktimeTable.classList.add("edited");
			editDetailsFunc(selects, 'edit');
		});
	}

	if (saveHoursBtn) {
		saveHoursBtn.addEventListener("click", function (e) {
			e.preventDefault();
			saveHoursBtn.classList.remove("active");
			worktimeTable.classList.remove("edited");
			editDetailsFunc(selects, "save");
		});
	};

	var memberStatus = $('.actions a:first-of-type');
	if(memberStatus.lenght !== 0) {
		$(memberStatus).on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('inactive');
		});
	};

	//custom range slider

	var range1 = document.getElementById('range1'),
			range2 = document.getElementById('range2'),
			range3 = document.getElementById('range3'),
			range4 = document.getElementById('range4'),
			range5 = document.getElementById('card-hold-time'),
			range6 = document.getElementById('card-reps');

	noUiSlider.create(range5, {
		start: [ 20 ],
		connect: [false, true],
		range: {
			'min': [  1 ],
			'max': [ 200 ]
		}
	});

	var outputRange5 = document.getElementById('sec');

	range5.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		outputRange5.value = Math.round(value);

		//you can write additional function here, which will work after slider changed


	});

	noUiSlider.create(range6, {
		start: [ 1 ],
		connect: [false, true],
		range: {
			'min': [  1 ],
			'max': [ 20 ]
		}
	});

	var outputRange6 = document.getElementById('reps-count');

	range6.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		outputRange6.value = Math.round(value);

		//you can write additional function here, which will work after slider changed


	});

	// noUiSlider.create(range1, {
	// 	start: [ 2 ],
	// 	connect: [false, true],
	// 	range: {
	// 		'min': [  1 ],
	// 		'max': [ 10 ]
	// 	}
	// });

	// var outputRange1 = document.getElementById('range1-output');

	// range1.noUiSlider.on('update', function( values, handle ) {
	// 	var value = values[handle];
	// 	outputRange1.value = Math.round(value);

	// 	//you can write additional function here, which will work after slider changed


	// });

	// noUiSlider.create(range2, {
	// 	start: [ 5 ],
	// 	connect: [false, true],
	// 	range: {
	// 		'min': [  1 ],
	// 		'max': [ 10 ]
	// 	}
	// });

	// var outputRange2 = document.getElementById('range2-output');

	// range2.noUiSlider.on('update', function( values, handle ) {
	// 	var value = values[handle];
	// 	outputRange2.value = Math.round(value);	
	// });

	// noUiSlider.create(range3, {
	// 	start: [ 1 ],
	// 	connect: [false, true],
	// 	range: {
	// 		'min': [  1 ],
	// 		'max': [ 5 ]
	// 	}
	// });

	// var outputRange3 = document.getElementById('range3-output');

	// range3.noUiSlider.on('update', function( values, handle ) {
	// 	var value = values[handle];
	// 	outputRange3.value = Math.round(value);	
	// });

	// noUiSlider.create(range4, {
	// 	start: [ 3 ],
	// 	connect: [false, true],
	// 	range: {
	// 		'min': [  1 ],
	// 		'max': [ 10 ]
	// 	}
	// });

	// var outputRange4 = document.getElementById('range4-output');

	// range4.noUiSlider.on('update', function( values, handle ) {
	// 	var value = values[handle];
	// 	outputRange4.value = Math.round(value);	
	// });

	//costom select
	$(".js-example-basic-single").select2();

	//sortable exercises
	$(".template-exercises ol").sortable({
		handle: ".move"
	});

	jwplayer("video-container").setup({
    "file": "https://physio.div.agency/assets/images/video.mp4",
    "width": 600,
    "height": 400
	});
};
