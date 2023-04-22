import './App.css';
import './style.scss'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
