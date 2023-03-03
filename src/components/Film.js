import React from 'react'

const Film = ({film, filmSelected}) => {

        const onFilmClick = function(){
                filmSelected(film)
        }


  return (
    <li onClick={onFilmClick}>{film.title}</li>
  )
}

export default Film