import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Detail from './page/Detail'

function App() {
  return (
      <div className="App">
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </div>
  
    
  );
};

export default App;
