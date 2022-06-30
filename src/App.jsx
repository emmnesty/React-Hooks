import { Routes, Route } from "react-router-dom";
import Contador from './Components/useContador';
import Fatorial from './Components/useFatorial';
import Home from './Home'

function App() {
   return (
    <Routes>
      <Route path="contador" element={<Contador />} />
      <Route path="fatorial" element={<Fatorial />} />
      <Route path="/" element={<Home />} />
      
    </Routes>
   )
}



export default App;
