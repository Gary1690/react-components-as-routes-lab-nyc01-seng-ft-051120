import React from 'react';
import { movies } from '../data';


const Movie = (props) => {
  const {title,time,genres} = props
  return(
  <div>
    <h3>Title: {title}</h3>
    <div>Time: {time}</div>
    <div>Genres:</div>
    <ul>
      {genres.map((genre,index)=>{
        return <Genre key={index} name={genre}/>
      })}
    </ul>
  </div>
  )
}

const Genre = (props) => {
return <li>{props.name}</li>
}



// const Movies = () => {
//   return (
//     <div>
//         <h1>Movies Page</h1>
//         {
//          movies.map((movie,index)=>{
//            return <Movie key={index} {...movie}/>
//          })
//         }
//     </div>
//   );
// };

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                  {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;
