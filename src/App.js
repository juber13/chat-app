import './App.css';
import './style.scss'
import Register from './pages/Register';
import Login from './pages/Login';
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
