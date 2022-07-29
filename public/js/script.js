const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.querySelector('.overlay');

// Toggle Menu and Overlay Function
const toggleMenu = () => {
	navbarMenu.classList.toggle('active');
	overlayMenu.classList.toggle('active');
};

burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);

// Collapsible SubMenu Function
const collapseSubMenu = () => {
	navbarMenu.querySelector('.menu-dropdown.active .submenu').removeAttribute('style');
	navbarMenu.querySelector('.menu-dropdown.active').classList.remove('active');
};

navbarMenu.addEventListener('click', (e) => {
	if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
		e.preventDefault();
		const menuDropdown = e.target.parentElement;

		// If menu-dropdown is Expanded, then Collapse It
		if (menuDropdown.classList.contains('active')) {
			collapseSubMenu();
		} else {
			// Collapse the Existing Expanded menu-dropdown
			if (navbarMenu.querySelector('.menu-dropdown.active')) {
				collapseSubMenu();
			}
			// Expanded the New menu-dropdown
			menuDropdown.classList.add('active');
			const subMenu = menuDropdown.querySelector('.submenu');
			subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
		}
	}
});

// Fixed Resize Window Function
const resizeWindow = () => {
	if (window.innerWidth > 992) {
		// If navbarMenu is Open, then Close It
		if (navbarMenu.classList.contains('active')) {
			toggleMenu();
		}
		// If menu-dropdown is Expanded, then Collapse It
		if (navbarMenu.querySelector('.menu-dropdown.active')) {
			collapseSubMenu();
		}
	}
};

window.addEventListener('resize', resizeWindow);


