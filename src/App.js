import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          <ButtonComponent name="Luca" />
          <ButtonComponent name="Campion" />
          <ButtonComponent name="terzo" />

          <ImageComponent srcinput= "https://www.tesoridialarico.it/wp-content/uploads/2024/03/canstockphoto22402523-arcos-creator.com_-1024x1024-1.jpg" altinput="foto di prova" />

        </a>
      </header>
    </div>
  );
}

export default App;
