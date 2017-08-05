$.fn.easyPieChart = function(options) {
	return this.each(function() {
		var instanceOptions;

		if (!$.data(this, 'easyPieChart')) {
			instanceOptions = $.extend({}, options, $(this).data());
			$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
		}
	});
};



 $('.program-score').easyPieChart({
  barColor: "#6fd0a7",
  trackColor: "transparent",
  scaleColor: "transparent",
  scaleLength: 0,
  rotate: "0",
  size: 50,
  lineWidth: 4,
  animate: {
		duration: 2500,
		enabled: true
  },
  onStep: function(from, to, percent) {
		var status = $(this.el).children('.score-data');
		status.html(Math.round(percent) + '%');
	}
});
