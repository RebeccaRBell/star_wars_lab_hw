import React, {useState} from 'react'

const Character = ({character, index}) => {

  const [name, setName] = useState(null);

    const settingName = fetch(`${character}`).then(res => res.json()).then(result => setName(result.name))
  return (
    <li id={index}>{name}</li>
  )
}

export default Character;