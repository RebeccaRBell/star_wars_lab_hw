import React, { useEffect, useState } from 'react'
import FilmDetail from '../components/FilmDetail';
import FilmList from '../components/FilmList';
import CharacterList from '../components/CharacterList';

const FilmContainer = ({films}) => {

        const[filmList, setFilmList] = useState([]);
        const [selectedFilm, setSelectedFilm] = useState(null);
        const [characters, setCharacters] = useState([])


        const getFilms = (url) => {
          fetch(url).then(res => res.json())
          .then(film => setFilmList(film));
        }

        const filmSelected = (film) => {
                fetch(film.url).then(result => result.json())
                .then(chosenFilm => setSelectedFilm(chosenFilm))
                }

              const assignCharacters = function(data){
                setCharacters(data);
              }
              
        
  return (
    <div className="container">
        <FilmList films={films} filmSelected={filmSelected} />
        {selectedFilm ? <FilmDetail film={selectedFilm} characters={characters} assignCharacters={assignCharacters}/>: null}
    </div>

  )
}

export default FilmContainer;