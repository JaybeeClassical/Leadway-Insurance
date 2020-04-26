import Header from './components/header';
import './styles/main.scss';
import HowItWorks from './components/howItWorks';


const app = () => {
    document.querySelector('.header').innerHTML = Header();
    document.querySelector('.how-it-works').innerHTML = HowItWorks();
}

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});




// initializing app
app();