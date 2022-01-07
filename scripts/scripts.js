

const containerID = document.getElementById("container"); //1), get container without using querySelector
const containerQS = document.querySelector("#container"); //2) get container using querySelector
const list = document.querySelector(".second"); //3) selects all of the list items with class of second
const olTagThird = document.getElementsByTagName('ol')[0].querySelector('.third');//4) select a list item with class of third within ol tag

let pTag = document.createElement('p'); //5) give container the text "hello"
pTag.textContent="hello"; //
document.body.appendChild(pTag); 

let footer = document.getElementsByClassName("footer")[0];//6) Add the class main to the div with a class of footer.
footer.classList.add("main")

footer.classList.remove("main")//7) Remove the class main on the div with a class of footer.


let listElement = document.createElement("li");//8) Create a new li element.
listElement.textContent = "four";

let unOrderedList = document.querySelector("ul");//9) Give the li the text "four".
unOrderedList.append(listElement);//10) Append the li to the ul element.

let ol = document.querySelector("ol");//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let olItems = Array.from(ol.children);
olItems.forEach(element => {element.style.backgroundColor = "green"});

footer.remove(); //13 remove div with class of footer


