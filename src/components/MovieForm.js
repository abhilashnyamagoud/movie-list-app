import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {addMovie} from '../actions/moviesAction'

const MovieForm=(props)=>{
    const [name,setName]=useState('')
    const [rating,setRating]=useState('')
    const [id,setId]=useState(uuidv4())
    const [formErrors,setFormErrors]=useState({})
    const errors={}

    const dispatch=useDispatch()

    const validation=()=>{
        if(name.trim().length===0){
            errors.name='Name Cannot be Blank '
        }
        if(rating.trim().length===0){
            errors.rating='Field Required'
        }
    }

    const handleName=e=>setName(e.target.value)
    const handleRating=e=>setRating(e.target.value)
    const formSubmit=(e)=>{
        e.preventDefault()
        validation()
        if(Object.keys(errors).length===0){
            setFormErrors({})
            const data={
                id:id,
                name:name,
                rating:Number(rating)
            }
            // console.log(data)
            dispatch(addMovie(data))
            setId(uuidv4())
            setName('')
            setRating('')
        }else{
            setFormErrors(errors)
        }
        
    }
    return(
        <div>
            <form onSubmit={formSubmit}>
                <input type='text' className='form-control' placeholder='Enter Movie Name' value={name} onChange={handleName} />
                {
                    formErrors.name && <span className='text-danger'>{formErrors.name} </span>
                }
                <br/>   
                <input type='number' className='form-control' placeholder='IMDB Ranking' value={rating} onChange={handleRating} />
                {
                    formErrors.rating &&<span className='text-danger'>{formErrors.rating} </span>
                }
                <input type='submit' value='Add' className='btn btn-primary mt-3 form-control' />
            </form>
        </div>
    )
}

export default MovieForm