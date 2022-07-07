import axios from 'axios'
import React from 'react'
import  "./CardMovie.css"

const CardMovie = ({movie, getAllMovies, URL, updateMovieById}) => {
  
  console.log(movie)

  const deleteMovie = id => {
    axios.delete(`${URL}${id}/`)
    .then(res => {
      console.log(res.data)
      getAllMovies()
    })
    .catch(err => console.log(err))
  }
    return (
    <article>
        <h2>{`${movie.id} ${movie.name}`}</h2>
        <ul>
            <li><b>Duration:</b>{movie.duration}</li>
            <li><b>Genre:</b>{movie.genre}</li>
            <li><b>Release date:</b>{movie.realease_data}</li>
        </ul>
        <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        <button onClick={() => updateMovieById(movie.id)}>Update</button>
    </article>
  )
}

export default CardMovie