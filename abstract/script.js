const hamburgerMenuToggle = document.getElementById("hamburgerMenuToggle");
const mobileMenuDropdown = document.getElementById("mobileMenuDropdown");
const mobileSearchBar = document.getElementById("mobileSearchBar");
const searchMenuToggle = document.getElementById("searchMenuToggle");
const closeSearchMenu = document.getElementById("closeSearchMenu");

closeSearchMenu.addEventListener('click', () => {
    mobileSearchBar.classList.remove('nav__show-mobile-search')
});

searchMenuToggle.addEventListener('click', () => {
    mobileSearchBar.classList.toggle('nav__show-mobile-search');
});

hamburgerMenuToggle.addEventListener('click', () => {
    mobileMenuDropdown.classList.toggle('nav_show-dropdown');
});