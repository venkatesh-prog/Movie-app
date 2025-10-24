import  { useState,useMemo } from 'react';
import { useRef, useEffect } from 'react';
import './Tittlecard.css';
// removed unused cards_data import
import { Link } from 'react-router-dom';



const TitleCard = ({ tittle, category }) => {
    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();
    const options = useMemo(() => ({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDkzMWZiZWQ5MmZjNWZmYTEyOWViMDA1NmFiZmI2MiIsIm5iZiI6MTc2MTI1NzE4NC4xNDYsInN1YiI6IjY4ZmFhNmUwODYxOGY5ODgwYTQxN2RjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRPmvdsYB4qtjBiBPyOcOyxOVanumwTzFq3ExJ0zbA8'
  }
}
), []);


    const handlewheel = (event) => {
        event.preventDefault();
        if (cardsRef.current) {
            cardsRef.current.scrollLeft += event.deltaY;
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handlewheel);
    }, [ category ,options]);
  return (
    
    <div className="tittle-card">
      <h2>{tittle ? tittle : "Poupular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
          <Link to={`/player/${card.id}`} key={card.id || index}>
          <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
          </Link>
        )})}
      </div>
    </div>
  );
};

export default TitleCard;
