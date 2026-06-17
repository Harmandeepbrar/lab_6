/**
 * Displays the top banner by removing the 'hide' class from it.
 * Uses a short delay to ensure the transition is triggered.
 */
function showTopBanner() {

	if (sessionStorage.getItem("topBannerClosed")) {
		return;
	}
	var banner = document.getElementById("top-banner");
	banner.classList.remove("hide");
	setTimeout(function () {
		banner.classList.add("show");
	}, 50); // Delay to ensure the transition is triggered
}


//creating Donot track function
function isTrackingAllowed(){
	return navigator.doNotTrack!=="1";
}

function getCookie(name) {
	return document.cookie
		.split("; ")
		.find(row => row.startsWith(name + "="))
		?.split("=")[1];
}

/**
 * Displays the footer banner by removing the 'hide' class from it.
 */
function showFooterBanner() {

    if (getCookie("footerClosed")) {
		return;
	}
	document.getElementById("footer-banner").classList.remove("hide");
}

/**
 * Displays the modal by removing the 'hide' class from it.
 */
function showModal() {

    if (localStorage.getItem("modalClosed")) {
		return;
	}
	document.getElementById("modal").classList.remove("hide");
    
}

/**
 * Hides the modal by adding the 'hide' class to it.
 */
function closeModal() {
	document.getElementById("modal").classList.add("hide");
	
    if(isTrackingAllowed()){
    	localStorage.setItem("modalClosed" , "closed")
	}
}

/**
 * Hides the top banner by adding the 'hide' class to it.
 */
function closeTopBanner() {
	document.getElementById("top-banner").classList.add("hide");


	if(isTrackingAllowed()){
		sessionStorage.setItem("topBannerClosed", "closed");
	}
}


/**
 * Hides the footer banner by adding the 'hide' class to it.
 */
function closeFooterBanner() {
	document.getElementById("footer-banner").classList.add("hide");


	if(isTrackingAllowed()){
    	document.cookie =
		"footerClosed=closed; expires=Fri, 19 Jun 2026 12:00:00 UTC;  path=/";
	}
}

// Event listeners to close the modal, top banner, and footer banner when 'x' is clicked
document.getElementById("modal").addEventListener("click", closeModal);
document.getElementById("top-banner").addEventListener("click", closeTopBanner);
document
	.getElementById("footer-banner")
	.addEventListener("click", closeFooterBanner);


//clear data
document.getElementById("clear-data")
.addEventListener("click", function () {

	localStorage.removeItem("modalClosed");
	sessionStorage.removeItem("topBannerClosed");

	document.cookie =
	"footerClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

});

// Show the footer banner after a delay of 1 second
setTimeout(showFooterBanner, 1000);

// Show the top banner after a delay of 2 seconds
setTimeout(showTopBanner, 2000);

// Show the modal after a delay of 4 seconds
setTimeout(showModal, 4000);