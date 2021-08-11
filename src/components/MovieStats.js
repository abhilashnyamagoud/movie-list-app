import React from 'react';
import { useSelector } from 'react-redux';

const MovieStats=(props)=>{
    const movie=useSelector((state)=>{
        return state.movies
    })
    const result=movie.filter((ele)=>{
        return ele.rating >4 
    })

    return(
        <div className='mt-3'>
        <div className='card'>
            <div className='card-header'>
            <h3>Movie Stats</h3>
            </div>
            <div className='card-body'>
                <div className='card-title'>
                   <h4>#Top Ranked Movies</h4> 
                </div>
                <ol>
                    {
                        result.map((ele)=>{
                            return <li key={ele.id}>#{ele.name} </li>
                        })
                    }
                </ol>
            </div>
        </div>
        </div>
    )
}

export default MovieStats