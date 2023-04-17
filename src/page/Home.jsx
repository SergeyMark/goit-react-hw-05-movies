import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FeatchMovie } from "components/FetchMovie";

import css from './Home.module.css';

const Home = () => {
    const [movieCards, setMovieCards] = useState([]);

    const location = useLocation();

    useEffect(()=> {
        FeatchMovie('trending/movie/day').then(resp => {
            setMovieCards(resp.data.results);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return(
        <>
            <h1 className={css.HeaderTitle}>Trending Movies</h1>
            <ul className={css.ListHome}>
               {movieCards.map((movieCard) => {

                    let imagePath;
                    if (movieCard.poster_path !== null) {
                        imagePath = 'https://image.tmdb.org/t/p/original/' + movieCard.poster_path
                    }else{
                        imagePath = '../../public/images/image.jpg';
                    }

                 return(
                    <li className={css.ListItem} key={movieCard.id}>
                        <Link to={`movie/${movieCard.id}`} state={{from: location}}>
                            <div>
                                <img src={imagePath} alt="poster" />
                            </div>
                            <h3>{movieCard.title}</h3>
                        </Link>
                    </li>
                 )
               })}
            </ul>
        </>
    )
}

export default Home;