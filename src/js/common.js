$(document).ready(() => {

	// SLICK INIT
	$('.slider').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
			{
			  breakpoint: 1440,
			  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
			  }
			}
		]
	})

	const burgerButton = document.getElementById('js-burger'),
				mobileMenu = document.getElementById('js-menu')

	burgerButton.addEventListener("click", () => {
		burgerButton.classList.toggle('header__burger--opened')
		mobileMenu.classList.toggle('mobile-menu--opened')
	})

	const parentMenu = document.getElementsByClassName('mobile-menu__toggle')

	for (item of parentMenu) {
		item.addEventListener("click", (e) => {
			item.parentElement.classList.toggle('mobile-menu__parent--opened')
		}, false)
	}



})