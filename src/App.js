import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Pokeman from "./pages/Pokeman";


import Header from "./pages/Header"
function App() {
  return (
    <div style={{backgroundColor:"#303030",color:"white"}} className="App">
      <Header />
      <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/pokeman/:id" element={<Pokeman />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;