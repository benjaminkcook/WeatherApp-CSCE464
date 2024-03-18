const form = document.getElementById('settings-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    saveSettings();
})

function saveSettings() {
    var unitType = document.getElementById('unit-type').value;
    var darkMode = document.getElementById('dark-mode').checked;

    localStorage.setItem('unitType', unitType);
    localStorage.setItem('darkMode', darkMode);

    var settingsInfo = document.getElementById('settings-info');
    settingsInfo.innerHTML = 'Settings saved successfully.';

    setTimeout(function () {
        settingsInfo.innerHTML = '';
    }, 2200);
    
    applyDarkModeStyles(darkMode);
}

var savedUnitType = localStorage.getItem('unitType');
var savedDarkMode = localStorage.getItem('darkMode');

if (savedUnitType) {
    document.getElementById('unit-type').value = savedUnitType;
}

if (savedDarkMode) {
    document.getElementById('dark-mode').checked = savedDarkMode === 'true';
}