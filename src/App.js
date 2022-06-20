import imageRickMorty from './img/rick-morty.png'
import './App.css';
import {Fragment, useState} from 'react';
import Character from './components/Character';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters} />
        ) 
        :
        (
          <Fragment>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
          </Fragment>
        ) }
        </header>
    </div>
  );
}

export default App;
