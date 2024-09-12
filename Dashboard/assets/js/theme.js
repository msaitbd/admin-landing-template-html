const toggler = document.getElementById('theme-toggler');

toggler.addEventListener('click', (e) => {
	const htmlNode = document.getElementsByTagName('html');
	const icon = toggler.querySelector('.fas');

	htmlNode[0].classList.toggle('dark');
	if (icon.classList.contains('fa-moon')) {
		icon.classList.remove('fa-moon');
		icon.classList.add('fa-sun');
	} else {
		icon.classList.add('fa-moon');
		icon.classList.remove('fa-sun');
	}
});
