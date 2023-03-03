import React, { useEffect, useState } from 'react'
import FilmDetail from '../components/FilmDetail';
import FilmList from '../components/FilmList';

const FilmContainer = ({films, charPages}) => {

        const [selectedFilm, setSelectedFilm] = useState(null);
        const [characters, setCharacters] = useState([]);

        const characterNames = [];

        const index = 0;

        const filmSelected = (film, index) => {
                fetch(film.url).then(result => result.json())
                .then(chosenFilm => setSelectedFilm(chosenFilm))
                const chars = selectedFilm.characters;
                const result = chars.map(data => {
                        return{data}

                })
                const getCharacters = characters => {
                        const charPromises = result.data.map((index) => {
                          return fetch(`https://swapi.dev/api/people/${index}`)
                          .then(res => res.json())
                        })
                        console.log(charPromises);
                        Promise.all(charPromises)
                        .then((characters) => {
                          setCharacters(characters)
                        })
                }
        }



        
  return (
    <div className="container">
        <FilmList films={films} filmSelected={filmSelected}/>
        {selectedFilm ? <FilmDetail film={selectedFilm} />: null}
    </div>

  )
}

export default FilmContainer;