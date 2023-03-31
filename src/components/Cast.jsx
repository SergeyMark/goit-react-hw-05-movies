import { FeatchMovie } from "./FetchMovie";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import css from './Cast.module.css';

export const Cast = () => {
    const [cast, setCast ] = useState([]);

    const { movieId } = useParams();

    useEffect(()=>{
        FeatchMovie(`movie/${movieId}/credits`).then(resp => {
          setCast(resp.data.cast);
        })
        .catch(error => {
          console.log(error);
        });
    }, [movieId]);

    if (cast.length === 0) {
        return 'Opppssss....';
      } else {
        const actors = cast.filter(
          (value, index) => index === cast.findIndex(v => v.id === value.id)
        );
        const actorItems = actors.map(({ id, profile_path, name, character }) => {
          return (
            <li className={css.ItemCast} key={id}>
              <img
                src={'https://image.tmdb.org/t/p/original/' + profile_path}
                alt="Actor"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        });
        return (
          <div>
            <ul className={css.ListCast}>{actorItems}</ul>
          </div>
        );
      }    
}
