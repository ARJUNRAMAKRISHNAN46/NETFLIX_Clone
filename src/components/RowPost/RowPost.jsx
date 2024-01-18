import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import "./RowPost.css";
import axios from "../../axios";
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        alert(error);
      });
  },[]);

  const handleMovie = (movieId) => {
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if(response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      } else {
        console.log('Array is Empty');
      }
    })
    console.log(movieId);
  }

  const opts = {
    height: '590',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => {
          return (
            <div key={obj.id}>
              {console.log(obj)}
              <img onClick={() => handleMovie(obj.id)} className={`${props.isSmall ? 'smallPoster' : 'poster'}`} src={`${movie ? imageUrl+obj.backdrop_path : ''}`} alt="Movie Image" />
              <h3>{obj.original_title || obj.name}</h3>
            </div>
          )
        })}
      </div>
      { urlId && <Youtube videoId={urlId.key} opts={opts}/> }
    </div>
  );
}

export default RowPost;
