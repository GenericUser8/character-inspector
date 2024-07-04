let isMobile = false;

// Checks if the device is a mobile device.
// Adapted from https://www.geeksforgeeks.org/javascript-detecting-a-mobile-browser/
// This method is not too good, and may need to be updated regularly.
// For example, iPads now want to be considered as desktops.
function checkMobile() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        console.log("Device detected as mobile.");
        isMobile = true;
    } else {
        console.log("Device detected as desktop.");
        isMobile = false;
    }
}

// Runs the script to check UserAgent on page load
checkMobile();