window.addEventListener('load', function () {

    let focus = document.querySelector('.focus');
    let focusTop = focus.offsetTop;
    let search = document.querySelector('.search');
    document.addEventListener('scroll', function () {
        // // 獲取滾動條垂直方向滾動了多少
        let top = document.documentElement.scrollTop || document.body.scrollTop;

        if (top >= focusTop) {
            search.className = 'search search-fix';
        } else {
            search.className = 'search';
        }
    })


    let headertop = document.querySelector('.top');
    function scrollToTop() {
        window.scrollTo(0, 0);
    }
    headertop.addEventListener("click", scrollToTop);


    let tabList = document.querySelector('.tab-list');
    let lis = tabList.querySelectorAll('a');
    let colRight = document.querySelectorAll('.col-right');   
    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function () {
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