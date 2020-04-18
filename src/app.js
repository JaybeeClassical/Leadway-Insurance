import Header from './components/header';
import './styles/main.scss';


const app = () => {
    document.querySelector('.header').innerHTML = Header();
}

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});




// initializing app
app();