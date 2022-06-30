import './Home.css';
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      
      <Link to="/contador">Contador</Link>
      
      <Link to="/fatorial">Fatorial</Link>
      
      <Link to="/ref">useRef</Link>
    </div>
  );
};

export default Home;
