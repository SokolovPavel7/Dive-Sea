function discover() {
    const productLink = document.querySelector('.product__link');
    const placeBidBtn = document.querySelectorAll('.discover__righte');
    console.log(productLink);

    placeBidBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const sectionProduct = document.querySelector('.product--none');
            const sectionDiscover = document.querySelector('.discover');
            sectionProduct.classList.remove('product--none');
            sectionProduct.classList.add('no-scroll');
            sectionDiscover.classList.add('discover--none');
        });
    });
}

export default discover;
