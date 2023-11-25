const sellersBtn = () => {
    let btns = document.querySelectorAll('.seller__btn');

    btns.forEach((btn) =>
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            if (btn.innerHTML === 'Follow') {
                btn.innerHTML = 'Unfollow';
            } else {
                btn.innerHTML = 'Follow';
            }
        })
    );
};

export default sellersBtn;
