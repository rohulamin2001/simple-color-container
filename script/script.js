
const btn = document.querySelector(".btn");
btn.addEventListener("click", changeColor)

function changeColor() {
    const element = document.querySelectorAll("ul li")
    const inputValue = document.querySelector(".inp").value;
    const item2 = document.querySelector(".item2")
    if (!isNaN(inputValue) || inputValue < 1) {
        alert("Hey, type a proper color name like red or #FF0000")
    } else {
        for (let i = 0; i < element.length; i++) {
            element[i].style.color = inputValue;
            item2.style.backgroundColor = inputValue;
        }
    }

}