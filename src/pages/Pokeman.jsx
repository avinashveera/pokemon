import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { style } from '../style/style';
const Pokeman = () => {

  const { id } = useParams();
  const Data = useSelector(state => state.data)

  let findDataInd = () => {
    for (let index = 0; index < Data.length; index++) {
      if (Data[index].id === id) {
        return index
      }
    }
  }
  const data = Data[findDataInd()]
  return (
    <div style={style.pokomanDiv}>
      <img src={data.images.small} style={style.pokomanImage} alt="" />
      <div style={style.pokomanText}>
        <h5> artist : {data.artist}</h5>
        <h5> name : {data.name}</h5>
        <h5> hp : {data.hp}</h5>
        <p> nationalPokedexNumbers : {data.nationalPokedexNumbers}</p>
        <p> types : {data.types}</p>
        <p> subtypes : {data.subtypes}</p>
        <p> supertypes : {data.supertype}</p>
        <p> rarity : {data.rarity}</p>
        <p> number : {data.number}</p>
        <p> weaknesses ( type : {data.weaknesses[0].type} , value : {data.weaknesses[0].value} )</p>
      </div>

    </div>

  )
}

export default Pokeman