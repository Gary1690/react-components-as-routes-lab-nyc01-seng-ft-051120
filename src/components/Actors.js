import React from 'react';
import { actors } from '../data';



const Actor = (props) => {
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

// const Actors = () => {
//   return (
//     <div>
//       <h1>Actors Page</h1>
//       {actors.map((actor,index)=><Actor key={index} {...actor}/>)}
//     </div>
//   );
// };


const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
          <div key={index}>
              <h3>Name: {actor.name}</h3>
              <p>Movies:</p>
              <ul>
                  {actor.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Actors;
