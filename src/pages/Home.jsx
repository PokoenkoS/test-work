import { Title, ImgBoy } from "./Main.styled"
import { MainDiv} from "./Main.styled"
import boy from "../image/Boy.png";

 const Home=()=> {
return (
    <MainDiv>
      <Title>WELCOME TO TWEETS!</Title>  
      <ImgBoy src={boy} alt="boy"></ImgBoy>
    </MainDiv>
)
}
export default Home