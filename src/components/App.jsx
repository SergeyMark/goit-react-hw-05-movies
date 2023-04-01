import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

// import Layout  from './Layout';
import { Home } from '../page/Home';
import { Movies } from '../page/Movies';
import { MovieDetails } from '../page/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

const Layout = lazy(() => import('./Layout'));
// const MovieDetails = lazy(() => import('../page/MovieDetails'));
// const Home = lazy(() => import('../page/Home'));
// const Movies = lazy(() => import('../page/Movies'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movie" element={<Movies/>}/>
          <Route path="movie/:movieId" element={<MovieDetails/>}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
  );
};
