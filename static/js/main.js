const baseurl = "http://127.0.0.1:8083/?q="
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            }
            );
        }
        );
    }
}
);

// Dropdowns
var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
        $el.addEventListener('click', function (event) {
            event.stopPropagation();
            $el.classList.toggle('is-active');
        });
    });

    document.addEventListener('click', function (event) {
        closeDropdowns();
    });
}

function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
        $el.classList.remove('is-active');
    });
}

// Functions
function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

function showSelected(item) {
    var selector = document.getElementById(item);
    var value = selector[selector.selectedIndex].value;
    //console.log(value);
    if (value === "any") {
        return '';
    } else {
        return item + "=" + value + "&";
    }
}

// Sidebar Anchor Menu Navigation
var quickLinks = document.querySelectorAll("#anchorMenu .menu-list a");
var positionArray = [], hashArray = [];

for (var i = 0; i < quickLinks.length; i++) {
    hashArray.push(quickLinks[i].href.substring(quickLinks[i].href.indexOf('#') + 1));
}

for (var i = 0; i < hashArray.length; i++) {
    positionArray.push(document.getElementById(hashArray[i]).getBoundingClientRect().top);
}

document.addEventListener("scroll", scrollHandler, true);

function scrollHandler() {
    currentScrollPosition = document.documentElement.scrollTop;
    //currentActivePosition = document.getElementsByClassName('toc-is-active')[0].getBoundingClientRect().top;

    for (var i = 1; i <= positionArray.length; i++) {

        if (currentScrollPosition >= positionArray[i - 1] && currentScrollPosition < positionArray[i]) {

            var currentActive = document.getElementsByClassName('toc-is-active')[0];

            if (currentActive != undefined) {
                currentActive.classList.remove('toc-is-active');
            }

            quickLinks[i - 1].classList.add('toc-is-active');

            break;

        }

        if (currentScrollPosition > positionArray[positionArray.length - 1]) {
            var currentActive = document.getElementsByClassName('toc-is-active');

            var currentActive = document.getElementsByClassName('toc-is-active')[0];

            if (currentActive != undefined) {
                currentActive.classList.remove('toc-is-active');
            }
            quickLinks[quickLinks.length - 1].classList.add('toc-is-active');

            break;

        }
    }
};

for (var i = 0; i < quickLinks.length; i++) {
    quickLinks[i].addEventListener('click', function (event) {
        document.removeEventListener('scroll', scrollHandler, true);

        isActive = document.getElementsByClassName('toc-is-active')[0];

        if (isActive != undefined) {
            isActive.classList.remove('toc-is-active');
        }

        this.classList.add('toc-is-active');

        setTimeout(function () {
            document.addEventListener("scroll", scrollHandler, true);
        }, 600);

    });
}

// Perform search
document.getElementById('sbtn').addEventListener('click', e => {
    let filterValue = document.getElementById('sbr').value.toLowerCase();
    window.location.assign(baseurl + filterValue);
    e.preventDefault();
})