import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from './Layout';
import { Movies } from '../page/Movies';
import { MovieDetails } from '../page/MovieDetails';

import { Cast } from './Cast';
import { Reviews } from './Reviews';

const Home = lazy(() => import('../page/Home'));
// // const Movies = lazy(() => import('./Movies'));
// // const MovieDetails = lazy(() => import('./MovieDetails'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));

// import { Home } from '../page/Home';


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/movie" element={<Movies/>}/>
          <Route path="/movie/:movieId" element={<MovieDetails/>}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>    
  );
};
