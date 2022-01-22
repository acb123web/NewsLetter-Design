const newsBox = document.querySelector(".wrapper");
const badge = document.querySelector(".badge");

function onSubscribe(){
    newsBox.classList.add("hide");
    badge.style.display = "block";
}

window.onload = function(){
    setTimeout(function(){
        newsBox.style.opacity = 1;
    },2000);
};