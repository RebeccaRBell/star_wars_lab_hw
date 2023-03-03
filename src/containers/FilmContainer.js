import React, { useEffect, useState } from 'react'
import FilmDetail from '../components/FilmDetail';
import FilmList from '../components/FilmList';

const FilmContainer = ({films, charPages}) => {

        const [selectedFilm, setSelectedFilm] = useState(null);
        const [characters, setCharacters] = useState([]);

        const getCharacters = url => {
          fetch(url)
          .then(result => result.json())
          .then(characters => setCharacters(characters.results))
          console.log(characters);

        }

        useEffect(() => {
                getCharacters(charPages[0].url)
        }, [charPages])

        const filmSelected = film => {
                fetch(film.url).then(result => result.json())
                .then(chosenFilm => setSelectedFilm(chosenFilm))
                console.log(selectedFilm)
        }

  return (
    <div className="container">
        <FilmList films={films} filmSelected={filmSelected}/>
        {selectedFilm ? <FilmDetail film={selectedFilm} />: null}
    </div>

  )
}

export default FilmContainer