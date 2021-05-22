
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Search from './components/Search';

function App() {
  const [darkMode,setDarkMode]=useState(false)
  return (
    <div className={`${darkMode&&'dark-mode'}`}>
      <div className="container">
      <Header  darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Search/>
        <NotesList/>
    </div>
    </div>
  );
}

export default App;
