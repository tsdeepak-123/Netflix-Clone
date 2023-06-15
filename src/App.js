import React from 'react'
import NavBar from './components/Navbar/navbar'
import {Actions,Orginals,ComedyMovies,HorrorMovies,RomanticMovies} from './urls'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Orginals} title='Netflix Orginals'/>
      <RowPost url={Actions} title='Actions' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy' isSmall/>
      <RowPost url={HorrorMovies} title='Horror' isSmall/>
      <RowPost url={RomanticMovies} title='Romance' isSmall/>
    </div>
  );
}

export default App;
