/*
*   TODO    -   Create the function to switch between light/dark mode 
*/

let darkMode = true;
const body = document.getElementById("body");

function switchLigthMode() {
    if (darkMode) {
        darkMode = false;
        body.classList.remove('body-dk');
        body.classList.add('body-lg');
    } else {
        darkMode = true;
        body.classList.remove('body-lg');
        body.classList.add('body-dk');
    }
    console.log(darkMode);
}

const ligthButton = document.getElementById("light-mode-button");
ligthButton.addEventListener("click", switchLigthMode);



/*
*   TODO    -   Create the function to switch between the diferent languages from the propertly strings (str folder)
*/

/*
*   TODO    -   Create the function send the mail when you push the contact form
*/