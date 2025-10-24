
import  Home from './pages/Home/Home'
import { Routes,Route,useNavigate} from 'react-router-dom'
import Loginpage from './pages/loginpage/Loginpage'
import Player from './pages/Player/Player'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";




const App = () => {

 const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                navigate("/");
                console.log("User Logged In");
            } else {
                navigate("/login");
                console.log("User Logged Out");
            }
        });
    }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />} />
         <Route path='/Login' element={ <Loginpage />} />
         <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
