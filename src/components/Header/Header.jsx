import siteLogo from '../../assets/react-core-concepts.png';
import './Header.css';
const dynamicTitle = ["Funadamental", "Core", "Crucial"];

function getRandomInt(max){

  return Math.floor(Math.random()*(max+1));
}

export default function Header(){
    return (
        <header>
          <img src={siteLogo} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {dynamicTitle[getRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }