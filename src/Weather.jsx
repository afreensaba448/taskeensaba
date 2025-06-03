const Weather=()=>{
    let Temperature=26;
    if(Temperature>15){
        return "its cold outside"

    }else if(Temperature>15 && Temperature<25){
        return "it's nice outside!"

    }
    else if(Temperature>25){
        return "its hot outside!"
    }

}
export default Weather;
