let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
}

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
}

sansSerifFontButton.onclick = function () {
    document.body.classList.remove('serif');
    serifFontButton.classList.remove('active');
    sansSerifFontButton.classList.add('active');
}

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
}