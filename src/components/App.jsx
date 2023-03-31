import { Route, Routes } from "react-router-dom";

import { Layout } from './Layout';
import { Home } from '../page/Home';
import { Movies } from '../page/Movies';
import { MovieDetails } from '../page/MovieDetails';

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/movie" element={<Movies/>}/>
          <Route path="/movie/:movieId" element={<MovieDetails/>}/>
        </Route>
      </Routes>    
  );
};
