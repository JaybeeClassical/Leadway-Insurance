import Header from './components/header';
import './styles/main.scss';


const app = () => {
    document.querySelector('.header').innerHTML = Header();
}


// initializing app
app();