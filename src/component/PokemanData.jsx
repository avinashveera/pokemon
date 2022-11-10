import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'

const Pokeman = () => {
  const dispach = useDispatch()

  //fetch api

  useEffect(() => {
    const getData = async () => {
      fetch('https://api.pokemontcg.io/v2/cards?page=1&pageSize=100', { method: "GET" })
        .then(res => res.json()).then((res) => {
          dispach({ type: "newData", payload: res })
        }).catch((err)=>{
          console.log(err)
        })
    }
    getData()

  })
  const Data = useSelector((state) => state.data)
  return (
    <>
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

export default Pokeman