const themeSelector = document.querySelector('#theme'); // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
    const body = document.querySelector('body');
    const logo = document.querySelector('#logo'); // get the logo element
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
if (themeSelector.value === 'dark') {
    body.classList.add('dark'); // add the dark class to the body
    logo.src = 'images/byui-logo_white.png';
 }
 else {
    body.classList.remove('dark'); // remove the dark class
    logo.src = 'images/byui-logo_blue.webp'; // make sure the logo src is the blue logo.
 } // change the source of the logo img to point to the white logo.
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);