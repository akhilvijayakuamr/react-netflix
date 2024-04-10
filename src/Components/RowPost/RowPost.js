import React,{useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [trail, setTrail] = useState('')
  useEffect(()=>{
    axios.get(props.url)
    .then((res)=>{
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res)=>{
        console.log(res.data.results)
        if (res.data.results.length !== 0){
          setTrail(res.data.results)
        }else{
          console.log("Trailer is not available")
        }
      })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj)=>
          <img onClick={()=> handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} alt="posters" src={`${imageUrl+obj.backdrop_path}`} />  
          )
        }
        

      </div>
      {
        trail && <YouTube opts={opts} videoId={trail.key} /> 
      }
      
    </div>
  )
}

export default RowPost
