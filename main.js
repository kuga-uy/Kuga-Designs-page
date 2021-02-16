
																//HEADING TEXT ANIMATION

//onload  create a new string adding an index
document.addEventListener('DOMContentLoaded', function (event) {
	let dataText = ['Do you want a nice Website?', 'Kuga Designs is the answer'];

	function writeText(text, i, fnCallback) {
		if (i < text.length) {
			document.querySelector('h1').textContent = text.substring(0, i + 1);
			setTimeout(function () {
				writeText(text, i + 1, fnCallback);
			}, 100);
		} else if (typeof fnCallback == 'function') {
			setTimeout(fnCallback, 700);
		}
	}

	// start  animation for a text in the dataText array
	function textAnimation(i) {
		if (typeof dataText[i] == 'undefined') {
			setTimeout(function () {
				textAnimation(0);
			}, 10000);
		} else if (i < dataText[i].length) {
			writeText(dataText[i], 0, function () {
				textAnimation(i + 1);
			});
		}
	}
    textAnimation(0)
});

									//TEAM CARDS ABOUTME DEPLOYMENT

document.querySelectorAll('.aboutme_btn').forEach(btn=> {
	btn.addEventListener('click',()=>{
		btn.classList.toggle('change');
		btn.nextElementSibling.classList.toggle('change');
	})
})

									//customers slide effect onscroll
let userScroll = false;
window.onscroll = function (element){
	if(element.target){
		userScroll = true;
	}
		if (userScroll == true){
			setTimeout (function(){
				document.querySelector('.customer_wrapper').style.transform = 'translateX(0rem)';
		},1500)
	}
}							
		
		
		

