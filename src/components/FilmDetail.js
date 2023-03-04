import React from 'react'
import CharacterList from './CharacterList'

const FilmDetail = ({film, assignCharacters, characters}) => {
  return (
    <div className='film-detail'>
        <h1>{film.title}</h1>
        <p>Directed by {film.director}</p>
        <p>{film.opening_crawl}</p>
        <CharacterList film={film} assignCharacters={assignCharacters} characters={characters}/>
    </div>
  )
}

export default FilmDetail