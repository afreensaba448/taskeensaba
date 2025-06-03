import { useState } from "react"

const Object=()=>{
    const[movie,setMovie]=useState({
title:"equalizer 3",
rating:7,
    });

    const handleClick=()=>{
        // const copyMovie={
        //     ...movie,
        //     rating:5
        // }
        setMovie({...movie,rating:5})
    }
    return<>
    
    <h1>{movie.title}</h1>
    <p>rating:{movie.rating}</p>
    <button onClick={handleClick}>change rating</button>
    </>
}
export default Object;