//function for back to top button
function backToTop() {
    window.scrollTo({
        top: 0, //scrolls back to the top
        behavior: 'smooth'
    });
}

//function for back to home button
function backToHome() {
    window.location.href = "../Student2/home.html";
}

//When the screen reaches a certain length of the page
//the two buttons become visible
window.onscroll = function() {
    var buttonTop = document.getElementById('back-to-top');
    var buttonHome = document.getElementById('back-to-home');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonTop.style.display = 'block';
        buttonHome.style.display = 'block';
    } else {
        buttonTop.style.display = 'none';
        buttonHome.style.display = 'none';
    }
};