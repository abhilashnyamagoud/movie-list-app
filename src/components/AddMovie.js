import React from 'react';
import MovieForm from './MovieForm';

const AddMovie=(props)=>{

    return(
        <div>
            <h1 className='display-5'>Add Movie</h1>
            <MovieForm />
        </div>
    )
}

export default AddMovie