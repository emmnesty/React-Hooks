import { Routes, Route } from "react-router-dom";
import Contador from './Components/useState'
import Fatorial from './Components/useEffect'
import Ref from './Components/useRef';
import Home from './Home'

function App() {
   return (
    <Routes>
      <Route path="contador" element={<Contador />} />
      <Route path="fatorial" element={<Fatorial />} />
      <Route path="ref" element={<Ref />} />
      <Route path="/" element={<Home />} />

      
    </Routes>
   )
}



export default App;
