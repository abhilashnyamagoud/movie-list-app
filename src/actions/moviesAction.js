
export const addMovie=(n)=>{
    return{
        type:'ADD_MOVIE',
        payload:n
    }
}

export const removeMovie=(n)=>{
    return{
        type:'REMOVE_MOVIE',
        payload:n
    }
}