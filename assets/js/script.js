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

(function () {
    "use strict";
    function Pagination() {
        const posts = [
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624eb4042a84a484628d663fa9666e09d49790d3eca58_thumb.jpg",
                name: "Women of Azerbaijan",
                date: "07-Aprel-2022"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624eb3975b9dc62a53932798371179d0d53311cc0efc4_thumb.jpg",
                name: "Startap ekosistemində qadınların rolu",
                date: "07-Aprel-2022"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ea47dde111c752b9df3a48e3dc0a14734224efea1c_thumb.jpg",
                name: "Məktəbli qızların innovasiya və startap ...",
                date: "07-Aprel-2022"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ea3d99341d58515182c9d2bd2121b38ad52ed7ed60_thumb.jpg",
                name: "Qadınların Startapda iştirakı",
                date: "07-Aprel-2022"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ea051122397e8349165c17562b0e625db3c5c43684_thumb.jpg",
                name: "FemTalk with Konul Guliyeva",
                date: "07-Aprel-202"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ad0bbdd6df3cf22f4ffa9c9d837cb0ba14b6ad9aed_thumb.jpg",
                name: '"Her Improvement" - 2. mərhələ',
                date: "04-Aprel-2022"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ac8f8bec0e33cae253220c0b19dab4f82711bc09f1_thumb.jpg",
                name: "Bakı Qida Hakatonu",
                date: "04-Aprel-2022"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/618d14a6008d191415ecfb5432e726af6ad578f0b2a41_thumb.jpg",
                name: "FemTalk with Nargiz Askerova",
                date: "11-Noyabr-2021"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/618d088f7f7186e09d453f00478e3567fa9664b80abbd_thumb.jpg",
                name: '"Her Improvement" - 1. mərhələ',
                date: "11-Noyabr-2021"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ea3d99341d58515182c9d2bd2121b38ad52ed7ed60_thumb.jpg",
                name: "Qadınların Startapda iştirakı",
                date: "07-Aprel-2022"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ea051122397e8349165c17562b0e625db3c5c43684_thumb.jpg",
                name: "FemTalk with Konul Guliyeva",
                date: "07-Aprel-202"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ad0bbdd6df3cf22f4ffa9c9d837cb0ba14b6ad9aed_thumb.jpg",
                name: '"Her Improvement" - 2. mərhələ',
                date: "04-Aprel-2022"
            },
            {
                link: "newsdetail.html",
                img: "https://femtech.az/uploads/624ac8f8bec0e33cae253220c0b19dab4f82711bc09f1_thumb.jpg",
                name: "Bakı Qida Hakatonu",
                date: "04-Aprel-2022"
            }
        ];

        const prevButton = document.getElementById('button_prev');
        const nextButton = document.getElementById('button_next');
        const clickPageNumber = document.querySelectorAll('.clickPageNumber');

        let current_page = 1;
        let records_per_page = 9;

        this.init = function () {
            changePage(1);
            pageNumbers();
            selectedPage();
            clickPage();
            addEventListeners();
        }

        let addEventListeners = function () {
            prevButton.addEventListener('click', prevPage);
            nextButton.addEventListener('click', nextPage);
        }

        let selectedPage = function () {
            let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber');
            for (let i = 0; i < page_number.length; i++) {
                if (i == current_page - 1) {
                    page_number[i].classList.add("current");
                }
                else {
                    page_number[i].classList.remove("current");
                }
            }
        }

        let checkButtonOpacity = function () {
            current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
            current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
        }

        let changePage = function (page) {
            const listingTable = document.getElementById('listingTable');

            if (page < 1) {
                page = 1;
            }
            if (page > (numPages() - 1)) {
                page = numPages();
            }

            listingTable.innerHTML = "";

            for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < posts.length; i++) {
                listingTable.innerHTML +=
                    `<div class='col-4'>
                        <article class='post format-standard shadow'>
                            <header class='post-header'>
                                <div class='post-content'>
                                    <a href='${posts[i].link}'>
                                        <img src='${posts[i].img}' alt='${posts[i].name}'>
                                    </a>
                                </div>
                            </header>
                            <footer class='post-footer'>
                                <div class='post-type-icon'>
                                    <i class='fa fa-file-text-o'></i>
                                </div>
                                <h2 class='post-title'><a href='#'>${posts[i].name}</a></h2>
                                <hr>
                                <span class='post-date'>${posts[i].date}</span>
                            </footer>
                        </article>
                    </div>`;
            }
            checkButtonOpacity();
            selectedPage();
        }

        let prevPage = function () {
            if (current_page > 1) {
                current_page--;
                changePage(current_page);
            }
        }

        let nextPage = function () {
            if (current_page < numPages()) {
                current_page++;
                changePage(current_page);
            }
        }

        let clickPage = function () {
            document.addEventListener('click', function (e) {
                if (e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                    current_page = e.target.textContent;
                    changePage(current_page);
                }
            });
        }

        let pageNumbers = function () {
            let pageNumber = document.getElementById('page_number');
            pageNumber.innerHTML = "";

            for (let i = 1; i < numPages() + 1; i++) {
                pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
            }
        }

        let numPages = function () {
            return Math.ceil(posts.length / records_per_page);
        }
    }
    let pagination = new Pagination();
    pagination.init();
})();
