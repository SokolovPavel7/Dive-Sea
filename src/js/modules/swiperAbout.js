import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperAbout() {
    const swiper = new Swiper('#swiper-about', {
        effect: 'fade',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 32,
        navigation: {
            nextEl: '#RightAbout',
            prevEl: '#LeftAbout',
        },
    });
}

export default swiperAbout;
