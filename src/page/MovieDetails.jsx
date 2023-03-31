import { FeatchMovie } from "components/FetchMovie";

import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useRef } from "react";

import css from './MovieDetails.module.css';

export const MovieDetails = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);
    const [poster, setPoster] = useState('');
  
    const { movieId } = useParams();
    const location = useLocation();

    const backLinkHref = useRef(location.state?.from ?? '/movies');

    useEffect(()=>{
        FeatchMovie(`movie/${movieId}`).then(resp=>{
            setTitle(resp.data.title);
            setOverview(resp.data.overview);
            setGenres(resp.data.genres);
            setDate(resp.data.release_date);
            setPoster(resp.data.poster_path);
        }).catch(error => console.log(error))
    }, [movieId])

    return(
        <>
            <Link className={css.Back} to={backLinkHref.current}>Back</Link>
            <div className={css.Container}>
                <div className={css.ContainerImg}>
                    <img
                        src={'https://image.tmdb.org/t/p/original/' + poster}
                        alt="poster"
                    />
                </div>

                <div className={css.ContainerInfo}>
                    <h1>
                        {title}({date.substring(-4, 4)})
                    </h1>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {genres.map((genre) => {
                            return <li key={genre.id}>{genre.name}</li>;
                        })}
                    </ul>
                </div>
            </div>
            <div className={css.ContainerInformation}>
                <p className={css.Information}>Information:</p>
                <ul className={css.ListInformation}>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}