import Header from './components/header';
import './styles/main.scss';
import HowItWorks from './components/howItWorks';
import Plan from './components/plan';


const app = () => {
    document.querySelector('.header').innerHTML = Header();
    document.querySelector('.how-it-works').innerHTML = HowItWorks();

    document.querySelector('.plan').innerHTML = Plan();


    let sliderCard = document.querySelectorAll('.each-card');
    let arrowLeft = document.querySelector('.previous-arrow');
    let arrowRight = document.querySelector('.next-arrow');
    let current = 0;

    function reset() {
        for (let i = 0; i < sliderCard.length; i++) {
            sliderCard[i].style.display = 'none';
        }
    }

    function startSlide() {
        reset();
        sliderCard[0].style.display = 'block';
    }

    // Show Previous
    function showPrevious() {
        reset();
        sliderCard[current - 1].style.display = 'block';
        current--;
    }

    // Show Next
    function showNext() {
        reset();
        sliderCard[current + 1].style.display = 'block';
        current++;
    }

    // Show previous event
    arrowLeft.addEventListener('click', function () {
        if (current === 0) {
            current = sliderCard.length;
        }
        showPrevious();
    });

    // Show next event
    arrowRight.addEventListener('click', function () {
        if (current === sliderCard.length - 1) {
            current = -1;
        }
        showNext();
    });

    startSlide();
}

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});

// This JavaScript Code Controling the Plan Section and Cards


// initializing app
app();