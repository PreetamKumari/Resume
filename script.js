var icon = document.querySelector(".fa-moon");

icon.onclick = function() {
	document.body.classList.toggle("dark-theme")
	icon.classList.toggle('fa-moon')
	icon.classList.toggle('fa-sun')
}