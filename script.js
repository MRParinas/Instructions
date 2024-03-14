document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        darkModeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    }

    function checkDarkModePreference() {
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = 'Toggle Light Mode';
        }
    }

    checkDarkModePreference();
    darkModeToggle.addEventListener('click', toggleDarkMode);
});