import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

const Spiner = () => {
  return (
    <div style={{ backgroundColor:"rgba(0,0,0,0.4)", width: "100%",height:"100vh" }}>
      <Spinner style={{position:"fixed",top:"50%",left:"50%"}} animation="border" variant="primary" /> 
    </div>
  )
}

export default Spiner