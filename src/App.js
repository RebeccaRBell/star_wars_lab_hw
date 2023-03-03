import './App.css';
import image from './star_wars.png';
import FilmContainer from './containers/FilmContainer';

function App() {

  const films = [{id: 1, title:"The Phantom Menace", url: "https://swapi.dev/api/films/4/"}, {id: 2, title: "Attack of the Clones", url: "https://swapi.dev/api/films/5/"}, {id: 3, title: "Revenge of the Sith", url: "https://swapi.dev/api/films/6/"}, {id:4, title: "A New Hope", url: "https://swapi.dev/api/films/1/"}, { id: 5, title: "The Empire Strikes Back", url:"https://swapi.dev/api/films/2/"}, {id: 6, title:"Return of the Jedi", url: "https://swapi.dev/api/films/3/"}]

  const charPages = [{name: "page1", url: 'https://swapi.dev/api/people/'}, {name: "page2", url: 'https://swapi.dev/api/people/?page=2'}, {name: 'page3', url: 'https://swapi.dev/api/people/?page=3'}, {name: "page4", url: 'https://swapi.dev/api/people/?page=4'}, {name: "page5", url: 'https://swapi.dev/api/people/?page=5'}, {name: "page6", url: 'https://swapi.dev/api/people/?page=6'}, {name: "page7", url: 'https://swapi.dev/api/people/?page=7'}, {name: 'page8', url: 'https://swapi.dev/api/people/?page=8'}, {name: "page9", url: 'https://swapi.dev/api/people/?page=9'}]


  return (
    <div className="App">
    <img src={image} alt=''/>
     <FilmContainer films={films} charPages={charPages}/>
    </div>  
  );
}

export default App;
