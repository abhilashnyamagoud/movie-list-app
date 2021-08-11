import React,{useState} from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const MoviesList=(props)=>{
    const [term,setTerm]=useState('')
    const movie=useSelector((state)=>{
        return state.movies
    })
    const filtered=movie.filter((ele)=>{
        return ele.name.toLowerCase().includes(term)
    })
    const handleTerm=(e)=>setTerm(e.target.value)

    return(
        <div className='row'>
            <div className='col-md-6'>
            <input type='text' placeholder='Search By Name' value={term} onChange={handleTerm} className='form-control mb-2' />
            </div>
            <div className='col-md-4'> 
            <select className='form-select'>
                <option>sort</option>
                <option>assending</option>
            </select>
            </div>
            
            {
                filtered.map((ele)=>{
                    return <MovieCard key={ele.id} {...ele} />
                })
            }
        </div>
    )
}

export default MoviesList