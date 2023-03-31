import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FeatchMovie } from './FetchMovie';

export const Reviews = () => {
    const [ reviews, setReviews ] = useState([]);

    const { movieId } = useParams();

    useEffect(()=>{
        FeatchMovie(`movie/${movieId}/reviews`).then( resp => {
            setReviews(resp.data.results);
        }).catch(error => {
            console.log(error);
        });
    }, [movieId]);

    if (reviews.length === 0) {
        return 'Opppssss....reviews not found';
      } else {
        const reviewsItems = reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>content: {content}</p>
            </li>
          );
        });
        return (
          <div>
            <ul>{reviewsItems}</ul>
          </div>
        );
      }    
}