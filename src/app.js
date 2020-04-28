import Header from './components/header';
import './styles/main.scss';
import HowItWorks from './components/howItWorks';
import Plan from './components/plan';


const app = () => {
    document.querySelector('.header').innerHTML = Header();
    document.querySelector('.how-it-works').innerHTML = HowItWorks();
    document.querySelector('.plan').innerHTML = Plan();
}

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});




// initializing app
app();