
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Mens from './Mens'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Women from './Women'
import Kids from './Kids'
function App() {
  

  return (
    <Router>
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/mens' element={<Mens></Mens>}></Route>
        <Route path='/women' element={<Women></Women>}></Route>
        <Route path='/kids' element={<Kids></Kids>}></Route>
      </Routes>

    </div>
    </Router>
      
  )
}

export default App
