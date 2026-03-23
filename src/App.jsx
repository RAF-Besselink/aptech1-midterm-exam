import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Profile from './pages/Profile';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      </>
    </>
  )
}

export default App
