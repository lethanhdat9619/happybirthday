
let firstSlideContainer =
	document.getElementsByClassName("slide--content")[0];

let secondSlideContainer =
	document.getElementsByClassName("slide--content--one")[0];

let secondCanvas =
	document.getElementsByClassName("second--canvas")[0];

let centerLine =
	document.getElementsByClassName("center--line")[0];

let mail = document.getElementsByClassName('envelope')[0]

let fire = document.getElementsByClassName('fire')[0]

secondSlideContainer.setAttribute("style", "display:none");
secondCanvas.setAttribute("style", "display:none");

let thirdCanvas =
	document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style", "display:none");



let containerToggleOne = setTimeout(function () {
	firstSlideContainer.setAttribute("style", "display:none");
	secondSlideContainer.setAttribute("style", "display:block");
}, 5000);


let removeFirstSlide = setTimeout(function () {
	document.getElementsByClassName("first--slide")[0].setAttribute("style", "display:none;")
	secondCanvas.setAttribute("style", "display:block");
}, 11500);

let removeSecondCanvas = setTimeout(function () {
	secondCanvas.setAttribute("style", "display:none");
	thirdCanvas.setAttribute("style", "display:block")
	mail.setAttribute("style", "display:none");
}, 17000)

let removeText = setTimeout(function () {
	centerLine.setAttribute("style", "display:none");
	mail.setAttribute("style", "display:block");
}, 38800)

// let test = setTimeout(function () {
// 		mail.classList.remove('new')
// 		mail.classList.add('open')
// }, 38800)

mail.addEventListener("click", () => {
	mail.classList.remove('new')
	mail.classList.add('open')
})

fire.addEventListener("click", () => {
	mail.setAttribute("style", "display:none");
})

