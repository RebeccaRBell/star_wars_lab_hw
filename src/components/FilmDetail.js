import React from 'react'

const FilmDetail = ({film}) => {
  return (
    <div className='film-detail'>
        <h1>{film.title}</h1>
        <p>{film.opening_crawl}</p>
    </div>
  )
}

export default FilmDetail