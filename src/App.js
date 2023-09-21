import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import MovieDetail from './Pages/MovieDetail';
import MovieList from './Components/movieLists/movieList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element = {<Home />}/>
        <Route path='/movie/:id' element = {<MovieDetail />}/>
        <Route path='/movies/:type' element = {<MovieList />}/>
        <Route path='/*' element = {<h1> ErrorPage </h1>}/>
      </Routes>
    </div>
  );
}

export default App;
