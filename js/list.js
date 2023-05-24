window.addEventListener('load', function () {

    let skHd = document.querySelector('.sk-hd');
    let headerSkhd = skHd.offsetTop;
    let search = document.querySelector('.search');
    document.addEventListener('scroll', function () {
        // // 獲取滾動條垂直方向滾動了多少
        let top = document.documentElement.scrollTop || document.body.scrollTop;

        if (top >= headerSkhd) {
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

})