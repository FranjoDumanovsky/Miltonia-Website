var scroll = document.querySelector('.scrollToTop');

window.addEventListener('scroll', function() {
	
	scroll.classList.toggle("active", window.scrollY > 500)

	scroll.addEventListener("click", function() {
		window.scrollTo ({
			top: 0,
			behavior: "smooth"
		})
	})
})


function scrollToTop() {

}