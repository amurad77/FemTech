$(document).ready(function(){
    $("#mobile-menu-trigger").click(function(){
        $("body").toggleClass("mobile-menu-open");
        $("#mobile-menu-trigger").toggleClass("is-clicked");
    });
});

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById('header').classList.add("minimize");
    } else {
        document.getElementById('header').classList.remove("minimize");
    }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementsByClassName('back-to-top')[0].classList.add("is-visible");
    } else {
        document.getElementsByClassName('back-to-top')[0].classList.remove("is-visible");
    }
}