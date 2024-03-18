document.addEventListener('DOMContentLoaded', function () {
    var savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode) {
        applyDarkModeStyles(savedDarkMode === 'true');
    }
});

function applyDarkModeStyles(darkMode) {
    if (darkMode) {
        document.body.style.backgroundColor = '#333333';
        document.body.style.color = '#F3EEEA';
    } else {
        document.body.style.backgroundColor = '#F3EEEA';
        document.body.style.color = '#000000';
    }
}
