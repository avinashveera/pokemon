import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react'

const Spiner = () => {
  return (
    <div style={{ backgroundColor:"rgba(255,255,255,0.4)", width: "100vw",height:"100vh",position:"fixed",top:"50%",left:"50%" }}>
      <Spinner animation="border" variant="primary" /> 
    </div>
  )
}

export default Spiner