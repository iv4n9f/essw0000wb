let theme;

const themeToggle = document.getElementById('theme');
const body = document.querySelector('body');
const logo = document.getElementById('logo');
const icon = document.getElementById('theme-icon'); 

function initialize(){
    theme = localStorage.getItem('theme');
    if(theme == null){
        theme = 'light';
        localStorage.setItem('theme', theme);
    }
    if (theme == 'dark'){
        body.classList.add('body-dark');
        body.classList.remove('body-light');
        logo.src = 'https://files.iv4n9f.com/Shared/images/logo-white.png';
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
        
    } else {
        theme = 'light';
        body.classList.add('body-light');
        body.classList.remove('body-dark');
        logo.src = 'https://files.iv4n9f.com/Shared/images/logo-black.png';
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
}

initialize();

function toggleTheme(){
    if (theme == 'light'){
        theme = 'dark';
        body.classList.add('body-dark');
        body.classList.remove('body-light');
        logo.src = 'https://files.iv4n9f.com/Shared/images/logo-white.png';
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');

    } else {
        theme = 'light';
        body.classList.add('body-light');
        body.classList.remove('body-dark');
        logo.src = 'https://files.iv4n9f.com/Shared/images/logo-black.png';
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
    localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', function(){
    toggleTheme();
    applyTheme();
});
