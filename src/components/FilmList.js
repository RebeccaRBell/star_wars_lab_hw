import React from 'react'
import CharacterList from './CharacterList'
import Film from './Film'

const FilmList = ({films, filmSelected}) => {

        const ListOfFilms = films.map((film, index) => {
            return <Film film={film} key={index} filmSelected={filmSelected}/>
          })


  return (
        <div className='list-container'>
    <ul className='film-list'>{ListOfFilms}
    </ul>
    </div>
  )
}

export default FilmList;