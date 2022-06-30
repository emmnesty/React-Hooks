import { Routes, Route } from "react-router-dom";
import Contador from './Components/useState'
import Fatorial from './Components/useEffect'
import Ref from './Components/useRef';
import Home from './Home'
import UseMemo from './Components/useMemo';

function App() {
   return (
    <Routes>
      <Route path="contador" element={<Contador />} />
      <Route path="fatorial" element={<Fatorial />} />
      <Route path="ref" element={<Ref />} />
      <Route path="memo" element={<UseMemo />} />
      <Route path="/" element={<Home />} />

      
    </Routes>
   )
}



export default App;
