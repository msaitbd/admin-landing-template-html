// Student Pie chart
(function () {
	const ctx = document.getElementById('std-pie-chart');

	new Chart(ctx, {
		type: 'pie',
		data: {
			datasets: [
				{
					data: [80, 50, 5], // Data points
					borderWidth: 1,
					backgroundColor: ['#302B62', '#635F8D', '#D1D5DB'],
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function (tooltipItem) {
							const labels = ['Male', 'Female', 'Others'];
							const dataIndex = tooltipItem.dataIndex;
							const value = tooltipItem.dataset.data[dataIndex];
							return `${labels[dataIndex]}: ${value}%`;
						},
					},
				},
			},
		},
	});
})();

// Employe Pie chart
(function () {
	const ctx = document.getElementById('employe-pie-chart');

	new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: [
				{
					data: [12, 5], // Data points
					borderWidth: 1,
					backgroundColor: ['#FFC400', '#00838F'],
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function (tooltipItem) {
							const labels = ['Teacher', 'Employees'];
							const dataIndex = tooltipItem.dataIndex;
							const value = tooltipItem.dataset.data[dataIndex];
							return `${labels[dataIndex]}: ${value}%`;
						},
					},
				},
			},
		},
	});
})();

// overview Pie chart
(function () {
	const ctx = document.getElementById('overview-pie-chart');

	new Chart(ctx, {
		type: 'pie',
		data: {
			datasets: [
				{
					data: [80],
					backgroundColor: ['#EA3546'],
				},
				{
					data: [80],
					backgroundColor: ['#678FD5'],
				},
				{
					data: [80],
					backgroundColor: ['#DC166B'],
				},
				{
					data: [80],
					backgroundColor: ['#8FC740'],
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function (tooltipItem) {
							const labels = ['Male', 'Female', 'Others'];
							const dataIndex = tooltipItem.dataIndex;
							const value = tooltipItem.dataset.data[dataIndex];
							return `${labels[dataIndex]}: ${value}%`;
						},
					},
				},
			},
		},
	});
})();

// attendance  bar chart
(function () {
	const ctx = document.getElementById('attendance-bar-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'One',
				'Two',
				'Three',
				'Four',
				'Five',
				'Six',
				'Seven',
				'Eight',
				'Nine',
				'Ten',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [80, 90, 30, 40, 29, 44, 88, 35, 53, 77], // Attendance data
					backgroundColor: ['#635f8d'], // Colors for each bar
					borderRadius: 70, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// attendance day bar chart
(function () {
	const ctx = document.getElementById('attendance-day-bar-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'Present',
				'Absent',
				'Leave',
				'Late',
				'Escaped',
				'Event',
				'Holiday',
				'Weekend',
				'Not Attendance',
			], // Class labels
			datasets: [
				{
					data: [40, 10, 0, 0, 0, 0, 0, 0, 2], // Attendance data
					backgroundColor: [
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
					], // Colors for each bar
					borderRadius: 6, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// attendance percentage bar chart
(function () {
	const ctx = document.getElementById('attendance-percentage-chart');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [0, 0, 0, 0, 7, 0, 0],
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// attendance day2 bar chart
(function () {
	const ctx = document.getElementById('attendance-day2-bar-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'Present',
				'Absent',
				'Leave',
				'Late',
				'Escaped',
				'Event',
				'Holiday',
				'Weekend',
				'Not Attendance',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [40, 10, 0, 0, 0, 0, 0, 0, 2], // Attendance data
					backgroundColor: [
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
						'#712DE4',
					], // Colors for each bar
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// daily fee bar chart
(function () {
	const ctx = document.getElementById('daily-fee-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [40, 10, 0, 0, 0, 0, 0, 0, 2], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// sub category fee bar chart
(function () {
	const ctx = document.getElementById('sub-cat-fee-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// monthly fee bar chart
(function () {
	const ctx = document.getElementById('monthly-fee-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [480, 10, 0, 880, 0, 0, 440, 2220, 2], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// monthly salary bar chart
(function () {
	const ctx = document.getElementById('salary-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [480, 10, 0, 880, 0, 0, 440, 2220, 2], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Income bar chart
(function () {
	const ctx = document.getElementById('income-bar-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [480, 10, 0, 880, 0, 0, 440, 2220, 2], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Income Pie chart
(function () {
	const ctx = document.getElementById('income-pie-chart');

	new Chart(ctx, {
		type: 'pie',
		data: {
			datasets: [
				{
					data: [80, 5], // Data points
					borderWidth: 1,
					backgroundColor: ['#00bbfe', '#0088f5'],
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function (tooltipItem) {
							const labels = ['Male', 'Female', 'Others'];
							const dataIndex = tooltipItem.dataIndex;
							const value = tooltipItem.dataset.data[dataIndex];
							return `${labels[dataIndex]}: ${value}%`;
						},
					},
				},
			},
		},
	});
})();

// Expense bar chart
(function () {
	const ctx = document.getElementById('expense-bar-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [480, 10, 0, 880, 0, 0, 440, 2220, 2], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Expense Pie chart
(function () {
	const ctx = document.getElementById('expense-pie-chart');

	new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: [
				{
					data: [80, 5], // Data points
					borderWidth: 1,
					backgroundColor: ['#fa6077', '#900506'],
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function (tooltipItem) {
							const labels = ['Male', 'Female', 'Others'];
							const dataIndex = tooltipItem.dataIndex;
							const value = tooltipItem.dataset.data[dataIndex];
							return `${labels[dataIndex]}: ${value}%`;
						},
					},
				},
			},
		},
	});
})();

// Assets bar chart
(function () {
	const ctx = document.getElementById('assets-bar-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [480, 10, -1110, 880, -440, -2220, 440, 2220, 2], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Assets Pie chart
(function () {
	const ctx = document.getElementById('assets-pie-chart');

	new Chart(ctx, {
		type: 'pie',
		data: {
			datasets: [
				{
					data: [80, 5], // Data points
					borderWidth: 1,
					backgroundColor: ['#21b0a6', '#2d8d5c'],
				},
			],
		},
		options: {
			plugins: {
				tooltip: {
					callbacks: {
						label: function (tooltipItem) {
							const labels = ['Male', 'Female', 'Others'];
							const dataIndex = tooltipItem.dataIndex;
							const value = tooltipItem.dataset.data[dataIndex];
							return `${labels[dataIndex]}: ${value}%`;
						},
					},
				},
			},
		},
	});
})();

// Income vs expense bar chart
(function () {
	const ctx = document.getElementById('inc_exp-bar-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			], // Class labels
			datasets: [
				{
					label: 'Income',
					data: [480, 10, 110, 880, 440, 2220, 440, 2220, 2, 480, 10, 110, 880], // Attendance data
					backgroundColor: ['#6da7fd'],
					borderRadius: 5, // Round bar corners
				},
				{
					label: 'Expense',
					data: [
						110, 880, 440, 2220, 480, 10, 110, 880, 440, 2220, 440, 2220, 2,
					], // Attendance data
					backgroundColor: ['#fa8267'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Visitors bar chart
(function () {
	const ctx = document.getElementById('visitors-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'Gurdian',
				'Employee Relatives',
				'OtherVisitors',
				'Institute Inspector',
				'ExStudent',
			],
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [0, 0, 0, 0, 0], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Student monthly groth bar chart
(function () {
	const ctx = document.getElementById('std-groth-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [480, 10, 0, 880, 0, 0, 440, 2220, 2], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Student session wise groth bar chart
(function () {
	const ctx = document.getElementById('std-ssn-groth-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['2021-2022', '2022-2023', '2023-2024'], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [480, 10, 440], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Student session wise groth bar chart
(function () {
	const ctx = document.getElementById('act-vs-inact-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'one',
				'tow',
				'three',
				'four',
				'five',
				'six',
				'seven',
				'eight',
				'nine',
				'ten',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [20, 23, 4, 15, 20, 23, 4, 15, 20, 23], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
				{
					label: 'Attendance Percentage',
					data: [-5, -5, -5, -5, -1, -7, -5, -5, -1, -7], // Attendance data
					backgroundColor: ['purple'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Student pass vs fail bar chart
(function () {
	const ctx = document.getElementById('pass-vs-fail-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'one',
				'tow',
				'three',
				'four',
				'five',
				'six',
				'seven',
				'eight',
				'nine',
				'ten',
			], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [20, 23, 4, 15, 20, 23, 4, 15, 20, 23], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
				{
					label: 'Attendance Percentage',
					data: [5, 5, 5, 5, 1, 7, 5, 5, 1, 7], // Attendance data
					backgroundColor: ['purple'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();

// Student pass vs fail bar chart
(function () {
	const ctx = document.getElementById('grade-chart');

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['A+', 'A', 'A-', 'B', 'C', 'D', 'F'], // Class labels
			datasets: [
				{
					label: 'Attendance Percentage',
					data: [20, 23, 4, 15, 20, 23, 4, 15, 20, 23], // Attendance data
					backgroundColor: ['#712DE4'],
					borderRadius: 5, // Round bar corners
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Attendance Percentage (%)',
					},
				},
				x: {
					title: {
						display: true,
						text: 'Classes',
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: 'top', // Display legend at the top
				},
				tooltip: {
					enabled: true,
					mode: 'index',
					intersect: false,
				},
			},
		},
	});
})();
