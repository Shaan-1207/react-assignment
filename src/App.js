
import './App.css';
import React, {useState, useEffect} from 'react';


export default function App() {

  const [data, setData] = useState([]);


  // Fetch Movies Data from JSON file
  const getData = () =>{
    fetch('./Data/json/data.json', {headers: {
      'Content-Type' :'application/json',
      'Accept' : 'application/json'
    }}).then((response)=>{
      return response.json()
    }).then((myjson)=>{
      setData(myjson);
      console.log(myjson);
    })
  }
  
  
  useEffect (()=>{
    getData()
  },[]);


  return (
      <div className = "movie-data">
        {

          data && data.length > 0 && data.map((movies)=> {
            return (
              <h1 key={movies.id}>{movies.title}</h1>
            )
          })
        }
      </div>
  );

  };




// export default App;





// const [movies, setMovies] = useState([]);
  
// useEffect(() => {
//   const fetchMovies = async () => {
//     try {
//       const response = await fetch("./Data/json/data.json");
//       const data = await response.json();
//       setMovies(data.movies);
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//     }
//   };

//   fetchMovies();
// }, []);

// return (
//   <div>
//     {movies.map((movie) => (
//       <div key={movie.id}>
//         <h2>{movie.title}</h2>
//         <p>Year: {movie.year}</p>
//         <p>Genres: {movie.genres.join(", ")}</p>
//         <p>Ratings: {movie.ratings.join(", ")}</p>
//         <img src={movie.posterurl} alt={movie.title} />
//         <p>Content Rating: {movie.contentRating}</p>
//         <p>Duration: {movie.duration}</p>
//         <p>Release Date: {movie.releaseDate}</p>
//         <p>Storyline: {movie.storyline}</p>
//         <p>Actors: {movie.actors.join(", ")}</p>
//       </div>
//     ))}
//   </div>
// );