$(document).ready(function() {
    $(".trigger").click(function() {
        $(".overlay").toggle();
    });
    $(".index-container").load("../txt/index-paragraph.html");
    $(".about-container").load("../txt/about-paragraph.html");
    $(".news-container").load("../txt/news-paragraph.html");
    $(".contact-container").load("../txt/contact-paragraph.html");
    $(".news-blog").load("../txt/20181104.html");
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 