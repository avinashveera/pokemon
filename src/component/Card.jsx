import React from 'react'
import { style } from '../style/style'
import { useNavigate } from "react-router-dom"


const Card = ({ photo, name, id }) => {
    const navgit = useNavigate();

    const navegt = (e) => {

        navgit(`/pokeman/${e.target.id}`)
    }

    return (

        <div style={style.cardStyle}>
            <img style={style.cardImg} src={photo} alt="pokomon" />
            <h5 style={style.cardName} id={id} onClick={(e) => (navegt(e))}>{name}</h5>

        </div>

    )
}

export default Card