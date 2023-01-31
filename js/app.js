let h2 = document.querySelector("h2");
let menuToggle = document.querySelector(".menu");
let ul = document.querySelector("ul");
let openList = document.querySelector(".open-list");
let login = document.querySelector(".login");
let content = document.querySelector(".content");

// lis control down list
let downOne = document.querySelector(".down-one");
let downTwo = document.querySelector(".down-two");
// down list
let listOne = document.querySelector(".list-one");
let listTwo = document.querySelector(".list-two");





// remove br element
// add login btn to list
window.onresize = function () {
    if (window.innerWidth <= 1000) {
        h2.innerHTML = "Make remote work";
        ul.appendChild(login);
    } else {
        h2.innerHTML = "Make<br>remote work";
        content.appendChild(login);
    }
}


// btn menu
menuToggle.addEventListener("click", function () {
    ul.classList.toggle("active");
    openList.classList.toggle("fa-times");
    menuToggle.style.cssText = " z-index: 120";
});

const show = (element, arrowUp) => {
    element.classList.toggle("active-list");
    arrowUp.firstElementChild.classList.toggle("up");
}
// show nested list
downOne.addEventListener("click", () => show(listOne, downOne));

downTwo.addEventListener("click", () => show(listTwo, downTwo));

