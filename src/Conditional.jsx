
const ValidPassword=()=><h1>valid password</h1>
const InvalidPassword=()=><h1>invalid password</h1>
const Password=({isValid})=>{
  if(isValid){
    return <ValidPassword/>
  }
//   return <InvalidPassword/>
  return isValid?<ValidPassword/>:<InvalidPassword/>
}
const Conditional=()=>{
  return<>
  <section>
    <Password isValid={false}/>
  </section>
  </>
}
export default Conditional;