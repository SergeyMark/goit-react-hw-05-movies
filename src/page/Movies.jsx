import { FeatchSearch } from "components/FetchMovie";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";



export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    let searchQuery;
    if (searchParams.get('searchQuery') !== null && searchParams.get('searchQuery') !== undefined) {
        searchQuery = searchParams.get('searchQuery');
    } else {
        searchQuery = '';
    }

    const location = useLocation();

    const handleSubmit = event => {
        event.preventDefault();
        const inputValue = event.currentTarget.elements.search.value;
        if (inputValue.trim() === '') {
            setSearchParams({});
            return;
        }
        setSearchParams({ searchQuery: inputValue });
    };

    useEffect(()=>{
        if (searchQuery === null) {
            setMovies([])
            return;
        }

        FeatchSearch(searchQuery).then(resp => {
            setMovies(resp.data.results);
        }).catch( error => console.error(error))
    }, [searchQuery, searchParams])

    return(
        <>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                autoComplete="off"
                name="search"
                autoFocus
                placeholder="Search Movies"
              />
              <button type="submit">Search</button>
            </form>
            <ul>
               {movies.map((movie) => {

                    let imagePath;
                    if (movie.poster_path !== null) {
                        imagePath = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
                    }else{
                        imagePath = '/goit-react-hw-05-movies/images/image.jpg';
                    }

                 return(
                    <li key={movie.id}>
                        <Link to={`${movie.id}`} state={{from: location}}>
                            <div>
                                <img src={imagePath} alt="poster" width={350} />
                            </div>
                            <h3>{movie.title}</h3>
                        </Link>
                    </li>
                 )
               })}
            </ul>
        </>
    )
}