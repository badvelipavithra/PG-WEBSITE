import Carousel from 'react-bootstrap/Carousel';
import firstImage from "../assets/room.webp"
import secondImage from "../assets/cozy-bedroom-ideas-5078657-hero-2763eb67d1f0404e9ab8eb7280553e8e.jpg"
import thirdImage from "../assets/Large-Cozy-Bedroom.webp"

function ImageCarousel() {
  return (
    <Carousel id = "home">
      <Carousel.Item >
        <img src={firstImage} className='pavi'/>
        <Carousel.Caption>
          <h1 style={{color:"black"}} >Affordable Best Boys PG</h1>
          <h5 style={{color:'black'}}>
            "Affordability with comfort,vibrant cosy and bright rooms".
          </h5>
        </Carousel.Caption>
        </Carousel.Item>
      
      <Carousel.Item>
      <img src={secondImage} className='pavi'/>
      <Carousel.Caption>
          <h2 style={{justifyContent:"space-between",color:"black"}}>All types of rooms available</h2>
          <h5 style={{color:"black"}}>"Only for boys"</h5>
        
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src={thirdImage} className='pavi'/>
      <Carousel.Caption>
        <h2 style={{color:"black"}}>"Feels like home"</h2>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;