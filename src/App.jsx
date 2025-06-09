
import Card from "./card";
import Conditional from "./conditional";
import Cart from "./cart";
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Greeting from "./Greeting";
import StyledCard from "./StyledCard";
import ProfileCard from "./ProfileCard"
import Button from "./Button";
import Object from "./Object";
import ArrayOfObject from "./ArrayOfObject";
const App=()=>{
  const style={backgroundColor:"teal",color:"white",
    
  }
  return<>
  <Card>
    <h1 style={style}>my card</h1>
    <p > this is some content </p>
  </Card>
  <Card>

    <h1>my card</h1>
    <p>this is some content for card 1</p>
  </Card>
  <Card>
    <h1>my card</h1>
    <p>this is some content for card 1</p>
  </Card>
  <Conditional/>

<Cart/>
<UserStatus LoggedIn={true} isAdmin={false}/>
<Weather/>


<Greeting timeOfDay={"Morning"}></Greeting>
<StyledCard/>
<ProfileCard/>
<Button/>
<Object/>
<ArrayOfObject/>
  </>
}




export default App;
