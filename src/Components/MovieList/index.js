import React, { useEffect, useState } from "react";
import './index.css'
const MovieList = ({ data, genre }) => {
  console.log('Movie List-',data,genre)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <React.Fragment>
      <h1 className="genre-title">{genre.toUpperCase()}</h1>
      <div className="movie-genre-wise">
        {
          movies && movies.map((moviesElem) => (    
              <section className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={moviesElem.poster} alt="broken-img" style={{width:'300px',height:'300px'}}/>
                  </div>
                  <div className="flip-card-back">
                    <h5 className="movie-title">{moviesElem.slug.toUpperCase()}</h5> 
                    <p className="movie-director"><p style={{color: 'black',fontWeight: 'bold',marginBottom: '0rem',fontSize: '1rem'}}>Directed By: </p>{moviesElem.director}</p>
                    <p className="movie-casts"><p style={{color: 'black',fontWeight: 'bold',marginBottom: '0rem',fontSize: '1rem'}}>Casts: </p> 
                        {
                          moviesElem.cast.map((castedActors) => {
                            return(
                              <ul style={{display: 'flex'}}>
                                <li>
                                    {castedActors}
                                </li>
                              </ul> 
                            )
                          })
                        }
                    </p>
                    <p className="Rating">
                      <span>{moviesElem.length}</span>
                      <span><>IMDB rating-</>{moviesElem.imdb_rating}</span>
                    </p>
                  </div>
                </div>
              </section>
          ))
        }
      </div>
    </React.Fragment>
  );
};

export default MovieList;
