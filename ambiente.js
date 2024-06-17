// Obtenha o botão
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > document.body.scrollHeight * 0.2 || 
        document.documentElement.scrollTop > document.documentElement.scrollHeight * 0.15) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

