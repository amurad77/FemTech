$(document).ready(function(){
    $("#mobile-menu-trigger").click(function(){
        $("body").toggleClass("mobile-menu-open");
        $("#mobile-menu-trigger").toggleClass("is-clicked");
    });
});

$("#cart-btn").click(function(event){
    event.preventDefault();
    $(".cart-box").slideToggle();
});

$("#mobile-cart-btn").click(function(event){
    event.preventDefault();
    $(".cart-box").slideToggle();
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

const minusItem = document.getElementById('minus-item');
const plusItem = document.getElementById('plus-item');
const totalItems = document.getElementById('total-items');
const onePrice = document.getElementById('one-price');
const totalPrice = document.getElementById('total-price');
const total = document.getElementById('total');
const subtotal = document.getElementById('subtotal');
const shipping = document.getElementById('shipping');
minusItem.addEventListener('click', (e) => {
	if (totalItems.innerHTML == 0) {
		return;
	}
	totalItems.innerHTML = Number(totalItems.innerHTML) - 1;
	totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(onePrice.innerHTML);
	subtotal.innerHTML = totalPrice.innerHTML;
	total.innerHTML = Number(totalPrice.innerHTML) + Number(shipping.innerHTML);
    e.preventDefault();
});
plusItem.addEventListener('click', (e) => {
	totalItems.innerHTML = Number(totalItems.innerHTML) + 1;
	totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(onePrice.innerHTML);
	subtotal.innerHTML = totalPrice.innerHTML;
	total.innerHTML = Number(totalPrice.innerHTML) + Number(shipping.innerHTML);
    e.preventDefault();
});