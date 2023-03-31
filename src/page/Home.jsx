import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FeatchMovie } from "components/FetchMovie";

export const Home = () => {
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
            <h1>Trending</h1>
            <ul>
               {movieCards.map((movieCard) => {

                    let imagePath;
                    if (movieCard.poster_path !== null) {
                        imagePath = 'https://image.tmdb.org/t/p/original/' + movieCard.poster_path
                    }else{
                        imagePath = '../../public/images/image.jpg';
                    }

                 return(
                    <li key={movieCard.id}>
                        <Link to={`movies/${movieCard.id}`} state={{from: location}}>
                            <div>
                                <img src={imagePath} alt="poster" width={350} />
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