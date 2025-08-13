window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = ''; 
}

mobileToggle.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        showToast("This is a preview version of the site, you can't send messages.");
    });
    
    function showToast(message) {
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.right = "20px";
        toast.style.background = "rgba(0, 0, 0, 0.8)";
        toast.style.color = "#fff";
        toast.style.padding = "10px 20px";
        toast.style.borderRadius = "5px";
        toast.style.zIndex = "1000";
        toast.style.opacity = "1";
        toast.style.transition = "opacity 0.5s ease";
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

