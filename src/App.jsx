
import "./app.css"
import Header from "./components/Header"
import ImageCarousel from "./components/ImageCarousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Facilities from "./components/Facilities";


const App=()=>{
    return(
       <div>
    
        <Header></Header>
        <ImageCarousel></ImageCarousel>
        <About></About>
        <Facilities></Facilities>

       </div>
    )
}
export default App