window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.mengenalImg');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});