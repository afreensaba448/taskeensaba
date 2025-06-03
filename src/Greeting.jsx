const Greeting=(props)=>{
   
    
    if(props.timeOfDay==="Morning"){
        return "Good Morning"

    }else{
        return "Good Afternoon"
    }
    
}
export default Greeting;