import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "components/Navbar/Navbar"
import HomePage from "pages/HomePage"
import MoviesPage from "pages/MoviesPage"
import SearchPage from "pages/SearchPage"
import TvsPage from "pages/TvsPage"
import Movie from "pages/Movie"
import Tv from "pages/Tv"

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/tvs" element={<TvsPage/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/tv/:id" element={<Tv/>}/>
      </Routes>
    </Router>
  )
}

export default App