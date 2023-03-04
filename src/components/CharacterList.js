import React from 'react'
import Character from './Character'

const CharacterList = ({film, assignCharacters, characters}) => {
  

    const obj = Object(film.characters);
    console.log(obj)

    const ListOfCharacters = obj.map((character, index) => {
      return <Character character={character} index={index} key={index}/>
    })

  return (
    <ul>
    {ListOfCharacters}
    </ul>
  )
  }
export default CharacterList;