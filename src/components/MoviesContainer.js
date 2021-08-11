import React from 'react';
import AddMovie from './AddMovie';
import MoviesList from './MoviesList';
import { useSelector} from 'react-redux';
import MovieStats from './MovieStats';

const MoviesContainer=(props)=>{
    const movie=useSelector((state)=>{
        return state.movies
    })
    console.log(movie)
    

    return(
        <div className='row'>
            <div className='col-md-12   '>
            <h1 className='display-5'>My Big Movie List</h1>
            </div>
            <hr/>
            <div className='col-md-8'>
            <MoviesList/>
            </div>
            <div className='col-md-4'>
            <AddMovie/>
            <MovieStats/>
            </div>
            
        </div>
    )
}

export default MoviesContainer