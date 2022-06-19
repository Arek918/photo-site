const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.menu');
const allNavItems = document.querySelectorAll('.link');
// const navActive = document.querySelector('.nav-mobile--active')
const sessionList = document.querySelector('.roll');
const dropdown = document.querySelector('.dropdown');
const dropdownLink = document.querySelectorAll('.dropdown-link');

const handleNav = () => {
	nav.classList.toggle('nav-mobile--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active');
			navBtn.classList.remove('opened');
		});
	});

	// nav.addEventListener('click', () => {
	//     nav.classList.remove('nav-mobile--active');
	//     navBtn.classList.remove('opened');
	// });

	// sessionList.addEventListener('click', () => {
	// 	dropdown.forEach((item) => {
	// 		item.classList.toggle('dropdown-list--active')
	// 	})
	// 	sessionList.classList.toggle('list--active')

	// })

};

sessionList.addEventListener('click', () => {
	dropdown.classList.toggle('dropdown--active');
	nav.classList.toggle('dropdown--height');
});

dropdownLink.forEach((item) => {
	item.addEventListener('click', () => {
		nav.classList.remove('nav-mobile--active');
		navBtn.classList.remove('opened');
		// nav.classList.remove('dropdown--height');
		// dropdown.classList.remove('dropdown--active');
	});
});
navBtn.addEventListener('click', handleNav);
