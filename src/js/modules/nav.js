function navList() {
    const navItem = document.querySelectorAll('.nav__item');

    navItem.forEach((item) => {
        item.addEventListener('click', () => {
            const navItemActive = document.querySelector('.nav__item--active');
            if (navItemActive) {
                navItemActive.classList.remove('nav__item--active');
            }
            item.classList.add('nav__item--active');
        });
    });
}

export default navList;
