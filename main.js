const btnHamburger = document.getElementById("js-btnHamburger");
const gnav = document.getElementById("js-gnav");

btnHamburger.addEventListener("click", () => {
	btnHamburger.classList.toggle("_open");
	gnav.classList.toggle("_open");
});


const navLinks = document.querySelectorAll(".gnav__link");

navLinks.forEach((nav) => {
	nav.addEventListener("click", () => {
		navLinks.forEach((nav) => {
			nav.classList.remove("_current");
		});
		nav.classList.add("_current");
	});
});
