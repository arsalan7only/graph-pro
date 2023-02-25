import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Auth from './Route/Auth';

function App() {
   
  return (
    <div className="App">
      <Auth/>
    </div>
  );
}

export default App;
