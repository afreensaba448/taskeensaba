import { useState } from "react"

const ArrayOfObject=()=>{
    const [movie,setMovie]=useState([
        {id:1,title:"spider man",ratings:3},
        {id:2,title:"super man",ratings:6},
    ])
    const handleClick=()=>{
        setMovie(movie.map(m=>m.id==1?{...movie,title:"john wick"}:m))

    }
    return<>
    {movie.map(m=>(
        <li key={Math.random()}>{m.title}</li>
    ))}
    <button onClick={handleClick}>change name</button>
    </>
}
export default ArrayOfObject;