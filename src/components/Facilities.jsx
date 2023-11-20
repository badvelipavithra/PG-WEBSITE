import boiler from "../assets/boiler-icon-water-heater-vector-260nw-1654370485.webp"
import food from "../assets/hotMeal.png"
import wifi from "../assets/free-wifi-icon-vector-wlan-260nw-1311890636.webp"
import laundary from "../assets/laundary.png"
import housekeeping from "../assets/housekeeping.png"
import biometric from "../assets/biometric.png"
import parking from "../assets/parking.jpg"

const Facilities=()=>{
    return(
        <div id="facilities">
            <h1 style={{marginTop:"70px",backgroundColor:"black",color:"white"}}>Facilities</h1>
            <ul className="items">
                <li className="eachFacility"><span className="spanStyle"><img src={food} alt="" id="image" />Hot and Delicious Meals</span></li>
                <li className="eachFacility" style={{marginLeft:"100px"}}><span className="spanStyle" ><img src={wifi} alt="" id="image" />wifi facility</span></li>
                <li className="eachFacility" style={{marginRight:"550px"}}><span className="spanStyle" style={{marginRight:"40px"}}><img src={laundary} alt="" id="image"/> Laundary service</span></li>
                
                </ul>
            <ul className="items">
                <li className="eachFacility"><span className="spanStyle"><img src={boiler} alt="" id="image" />Hot water supply </span></li>
                <li className="eachFacility" style={{marginLeft:"5px"}}><span className="spanStyle"><img src={housekeeping} alt="" id="image"/>Professional housekeeping</span></li>
                <li className="eachFacility" style={{marginRight:"500px"}}><span className="spanStyle"><img src={parking} alt="" id="image" />Two wheeler parking</span></li>
                

            </ul>
        </div>
    )
}
export default Facilities