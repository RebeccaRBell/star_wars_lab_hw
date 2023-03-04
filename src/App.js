import './App.css';
import image from './star_wars.png';
import FilmContainer from './containers/FilmContainer';
import { useEffect } from 'react';

function App() {

  const films = [{id: 1, title:"The Phantom Menace", url: "https://swapi.dev/api/films/4/"}, {id: 2, title: "Attack of the Clones", url: "https://swapi.dev/api/films/5/"}, {id: 3, title: "Revenge of the Sith", url: "https://swapi.dev/api/films/6/"}, {id:4, title: "A New Hope", url: "https://swapi.dev/api/films/1/"}, { id: 5, title: "The Empire Strikes Back", url:"https://swapi.dev/api/films/2/"}, {id: 6, title:"Return of the Jedi", url: "https://swapi.dev/api/films/3/"}]


  return (
    <div className="App">
    <img src={image} alt=''/>
     <FilmContainer films={films}/>
    </div>  
  );
}

export default App;
