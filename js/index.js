window.addEventListener('load', function() {

    let tabList = document.querySelector('.tab-list');
    let lis = tabList.querySelectorAll('a');
    let colRight = document.querySelectorAll('.col-right');
    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click' , function() {
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'cis';
            let index = this.getAttribute('index');
            console.log(index);
            for (let i = 0; i < colRight.length; i++) {
                colRight[i].style.display = 'none';
            }
            colRight[index].style.display = 'block';
        })
    }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },

        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        autoplay: {
        delay: 3000,
        },
    });

})