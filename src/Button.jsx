// const Button=()=>{
//     const handelClick=()=>{
//         console.log(Math.round(Math.random()*10))
//     }
//     return<> 
//     <button onClick={handelClick}>button</button>

import { useState } from "react"


    
//     </>
// }

const Button=()=>{
    // const copyHandler=()=>{
    //     alert("stop stealing my content")

        // const [count, setCount]=useState(0);
        // const increment=()=>setCount(count+1)
        // const decrement=()=>setCount(count-1)
        // console.log("stop stealing my content")
        const [Friends,setFriends]=useState(["taskeen","saba"]);
        const addFriend=()=>setFriends([...Friends,"taskeensaba"]);
        const removeFriend=()=>setFriends(Friends.filter((f)=>f!=="taskeen"))
    
    return<>
    {/* <p onCopy={copyHandler}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatum laudantium cumque magnam deserunt consectetur ut earum animi quidem? Voluptates!</p> */}
    {/* <h1>{count}</h1> */}
    {/* <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button> */}
    {Friends.map((f)=>(
        <li key={Math.random()}>{f}</li>
    ))}
    <button onClick={addFriend}>addFriend</button>
    <button onClick={removeFriend}>removeFriend</button>
    
    </>
}
export default Button;