import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperDiscover() {
    const swiper = new Swiper('#swiper-discover', {
        effect: 'fade',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 32,
        navigation: {
            nextEl: '#RightDiscover',
            prevEl: '#LeftDiscover',
        },
    });
}

export default swiperDiscover;
