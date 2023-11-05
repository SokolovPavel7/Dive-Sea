import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperWeekly() {
    const swiper = new Swiper('#swiper-weekly', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 32,
        navigation: {
            nextEl: '#weeklyNext',
            prevEl: '#weeklyPrev',
        },
        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
}

export default swiperWeekly;
