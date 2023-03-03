import React from 'react'

const FilmDetail = ({film}) => {
  return (
    <div className='film-detail'>
        <h1>{film.title}</h1>
        <p>Directed by {film.director}</p>
        <p>{film.opening_crawl}</p>
        <p>{film.characters[0]}</p>
    </div>
  )
}

export default FilmDetail