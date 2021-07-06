import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Main from './components/Main/Main';
// import Settings from './components/Settings/Settings'
// import Timer from './components/Timer/Timer';
// import Stopwatch from './components/Timer/Timer';

function App() {
  const state = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(state));
  }, [state]);
  
  return (
    <div className="App">
      <Main />
      </div>
    
  );
}

export default App;
