import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'
import Spiner from '../style/Spiner';
import { useState } from 'react';
const Pokeman = () => {
  const [load,setLoad]=useState(true)

  const Data = useSelector((state) => state.data)
  const dispach = useDispatch()
  //fetch api


  useEffect(() => {

    fetch("https://api.pokemontcg.io/v2/cards?page=1&pageSize=100",
  {
    method: "GET"
  })
  .then(response => response.json())
  .then(json => {
    setLoad(false)
    dispach({ type: "newData", payload: json })
  })


  })
  
  return (
   
   load?<Spiner />:<>
      
      {
        Data.map((arr) => {
          return <Card
            key={arr.id}
            id={arr.id}
            name={arr.name}
            photo={arr.images.small}
          />
        })

      }



    </>
  )

}

export default Pokeman;