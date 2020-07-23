import React from 'react';
import { directors } from '../data';


const Director = (props) => {
  const {name,movies} = props
  return(
    <div>
      <h3>Name: {name}</h3>
      <div>Movies:</div>
      <ul>
        {movies.map((movie,index)=>{
          return <Movie key={index} name={movie}/>
        })}
      </ul>
    </div>
  )
}

const Movie = (props) => {
return <li>{props.name}</li>
}

// const Directors = () => {
//   return (
//     <div>
//       <h1>Directors Page</h1>
//       {directors.map((director,index)=><Director key={index} {...director}/>)}
//     </div>
//   );
// }

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
          <div key={index}>
              <h3>Name: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                  {director.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
}
export default Directors
