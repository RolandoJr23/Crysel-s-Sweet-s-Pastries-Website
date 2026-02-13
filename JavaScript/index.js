// ************************************Toggle Menu Navigation Bar************************************
const hamMenu = document.querySelector(".ham-menu");
const togMenu = document.querySelector("ul");

togMenu.style.maxHeight = "0px";

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    if(togMenu.style.maxHeight == "0px")
    {
        togMenu.style.maxHeight = "400px"
        togMenu.style.transition = "max-height .3s ease-in-out";
    }
    else{
        togMenu.style.maxHeight = "0px"
    }
});