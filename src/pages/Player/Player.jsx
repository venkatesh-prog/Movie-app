import { useEffect, useState } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import './Player.css';
import arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apidata, setApidata] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDkzMWZiZWQ5MmZjNWZmYTEyOWViMDA1NmFiZmI2MiIsIm5iZiI6MTc2MTI1NzE4NC4xNDYsInN1YiI6IjY4ZmFhNmUwODYxOGY5ODgwYTQxN2RjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRPmvdsYB4qtjBiBPyOcOyxOVanumwTzFq3ExJ0zbA8'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then(res => res.json())
      .then(res => setApidata(res.results[0]))
      .catch(err => console.error(err));
  }, [  id, options]);


  return (
    <div className="player">
      <img src={arrow_icon} alt="Back" onClick={() => navigate("/")} className="back-btn" />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0, 10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
};

export default Player;
