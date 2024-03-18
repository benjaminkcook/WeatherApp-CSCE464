document.addEventListener('DOMContentLoaded', function () {
    var savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode) {
        applyDarkModeStyles(savedDarkMode === 'true');
    }
});

function applyDarkModeStyles(darkMode) {
    const navbarLinks = document.querySelectorAll('.navbar a');

    if (darkMode) {
        document.body.style.backgroundColor = '#333333';
        document.body.style.color = '#F3EEEA';
        navbarLinks.forEach(link => {
            link.style.color = '#F3EEEA';
            link.addEventListener('mouseover', function() {
                link.style.color = '#B0A695';
            });
            link.addEventListener('mouseout', function() {
                link.style.color = '#F3EEEA';
            });
        });
        
    } else {
        document.body.style.backgroundColor = '#F3EEEA';
        document.body.style.color = '#000000';
        navbarLinks.forEach(link => {
            link.style.color = '#000000';
            link.addEventListener('mouseover', function() {
                link.style.color = '#B0A695';
            });
            link.addEventListener('mouseout', function() {
                link.style.color = '#000000';
            });
        });
    }
}
