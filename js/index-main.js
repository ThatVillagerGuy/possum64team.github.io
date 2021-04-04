
const topButton = document.getElementById("topButton");

//Functionality for Back To Top Button
function smoothScrollTop() {
	console.log("Called!");
	let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	if (currentScroll > 0) {
		window.requestAnimationFrame(smoothScrollTop);
		window.scrollTo(0, currentScroll - (currentScroll/5));
	}
}

topButton.addEventListener("click", e => {
	console.log("Clicked!");
	smoothScrollTop();
});

topButton.style = "display: block;" //Handled here so the element doesn't appear clickable if JavaScript isn't enabled.
