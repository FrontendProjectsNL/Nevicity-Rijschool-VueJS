const rijlesParagraph = document.getElementById('rijles-paragraph');

const paragraphObserverCallback = (rijlesParagraphToWatch, rijlesParagraphObserver ) => {
    /*je MOET hier een loop gebruiken: ookal heb je 1 paragraaf: */
    rijlesParagraphToWatch.forEach(element => {
        if(element.isIntersecting) {
            //console.log("Hallo!");
            //console.log(element.target);
            console.log(element.target);
            element.target.classList.add('show');
            rijlesParagraphObserver.unobserve(element.target);
        }
    
    });
    
}
const paragraphObserverOPtions = {
    treshhold: .7
}

const rijlesParagraphObserver = new IntersectionObserver(paragraphObserverCallback, paragraphObserverOPtions);
rijlesParagraphObserver.observe(rijlesParagraph);


// Mijn Slideshow:
//=================
const Slider = document.querySelector(".slider");
const allBtns = document.querySelectorAll(".btn");
const allSlideImgs = document.querySelectorAll(".img");

let index = 1;
let imgWidth = allSlideImgs[index].clientWidth;

window.addEventListener('resize', () => {
	imgWidth = allSlideImgs[index].clientWidth;
})

function slide() {
	Slider.style.transition = 'transform 500ms ease-in-out';
	Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
}

function btnClick() {
	if (this.id === 'prev') {
		index--;
	}
	else {
		index++;
	}
	this.disabled = true
	slide();
}

Slider.addEventListener('transitionend', () => {

	if (allSlideImgs[index].id === 'first') {
		Slider.style.transition = 'none';
		index = allSlideImgs.length - 2;
		Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
	}
	else if (allSlideImgs[index].id === 'last') {
		Slider.style.transition = 'transform 500ms ease-in-out 1000ms';
		 
		index = 1;
		Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
	}
	allBtns[0].disabled = false
	allBtns[1].disabled = false
})

allBtns.forEach(btn => btn.addEventListener('click', btnClick));

//=========================

/*
show slider button:
const btnSliderID = document.getElementById('btn-slider');

const btnSliderIDObserverCallback = (btnSliderIDToWatch, btnSliderIDObserver ) => {
  
    btnSliderIDToWatch.forEach(element => {
        if(element.isIntersecting) {
            console.log(element.target);
            element.target.classList.add('showBtn');
            btnSliderIDObserver.unobserve(element.target);
        }
		else {
			element.target.classList.remove('showBtn');
			console.log("removing class!");
			console.log(element.target);
		}
    
    });
    
}
const btnSliderIDObserverOPtions = {
    treshhold: .7
}

const btnSliderIDObserver = new IntersectionObserver(btnSliderIDObserverCallback, btnSliderIDObserverOPtions);
btnSliderIDObserver.observe(btnSliderID);

*/
