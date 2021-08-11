import React from 'react';
import { useDispatch } from 'react-redux';
import {removeMovie} from '../actions/moviesAction'



const MovieCard=(props)=>{
   const {id,name,rating}=props
   const dispatch=useDispatch()

    const handleRemove=(id)=>{
        dispatch(removeMovie(id))
    }
    return(
        <div className=' col-md-4 mb-4'>
        <div className='card'>
            <div className='card-header bg-secondary'>
                 <h3>Movie: {name} </h3>
            </div>
            <div className='card-body'>
                <div className='card-title'>
                <h4>IMDB-RANK {rating} </h4>
                </div>
                <button className='btn btn-sm btn-danger' onClick={()=>{
                    handleRemove(id)
                }}>Delete</button>

            </div>
        </div>
        </div>
    )
}
export default MovieCard