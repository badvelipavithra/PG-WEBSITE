import Carousel from 'react-bootstrap/Carousel';
import firstImage from "../assets/download.jpg"
import secondImage from "../assets/download (1).jpg"
import thirdImage from "../assets/download (2).jpg"

function ImageCarousel() {
  return (
    <Carousel style={{backgroundColor:"black"}} id = "home">
      <Carousel.Item >
        <img src={firstImage} className='pavi'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={secondImage} className='pavi'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={thirdImage} className='pavi'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;