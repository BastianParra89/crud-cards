import axios from 'axios'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import CardMovie from './components/CardMovie/CardMovie'
 

const URL='https://movies-crud-academlo.herokuapp.com/movies/'

function App() {
 
  const [movies, setMovies] = useState()
  const {handleSubmit, register}  = useForm()

  const getAllMovies  = ()  =>  {
    axios.get(URL)
    .then(res => setMovies(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllMovies() 
  }, [])
  
console.log(movies)



const createMovie = () =>  {
  
const newMovie  = {
  name: 'Gladiador',
  genre:  'accion',
  duration: '120 minutos',
  release_date: '2006-01-01'
}
  
  axios.post(URL, newMovie)
  .then(res => {
    console.log(res.data)
    getAllMovies()
  })
  .catch(err => console.log(err))
}

const updateMoviesById  = id  => {
  const updateMovie = {
    name: 'Interstellar',
    duration: '120 Min.'
  }

axios.patch(`${URL}${id}/`, updateMovie)
  .then(res => {
    console.log(res.data)
    getAllMovies()
  })
  .catch(err => console.log(err))
  
}


  return (
    <div className="App">
      <button onClick={createMovie}>Create a new movie</button>
      <form action="">
        
      </form>
      <div  className='card-character'>
      {
        movies?.map(movie => (
          <CardMovie
            key={movie.id}
            movie={movie}
            URL={URL}
            getAllMovies={getAllMovies}
            updateMovieById={updateMoviesById}
          />
        ))
      }
      </div>
      
    </div>
  )
}

export default App
