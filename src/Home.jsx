import './Home.css';
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      
      <Link to="/contador">useState</Link>
      
      <Link to="/fatorial">useEffect</Link>
      
      <Link to="/ref">useRef</Link>

      <Link to="/memo">useMemo</Link>
    </div>
  );
};

export default Home;
