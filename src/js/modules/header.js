function navList() {
    const navItem = document.querySelectorAll('.header__item');

    navItem.forEach((item) => {
        item.addEventListener('click', () => {
            const navItemActive = document.querySelector('.header__item--active');
            if (navItemActive) {
                navItemActive.classList.remove('header__item--active');
            }
            item.classList.add('header__item--active');
        });
    });
}

export default navList;
