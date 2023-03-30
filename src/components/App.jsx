import { Route, Routes } from "react-router-dom";

import { Home } from '../page/Home';
import { Movies } from '../page/Movies';
import { MovieDetails } from '../page/MovieDetails';

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movies/>}/>
        <Route path="/details" element={<MovieDetails/>}/>
      </Routes>    
  );
};
