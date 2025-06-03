const UserStatus=(props)=>{

if(props.LoggedIn&&props.isAdmin){
    return "Welcome Admin"

}else{
    return "Welcome User "
}
}
export default UserStatus;