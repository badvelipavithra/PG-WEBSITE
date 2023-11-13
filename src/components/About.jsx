import icon from "../assets/phone-call-icon.svg"
import mailicon from "../assets/mailicon.png"


const About = () =>{
    return(
        <div id="contact">
            <h1>Any Queries</h1>
            <h1>Contact us</h1>
            <h6> Address : Btm 2nd stage,6th main,8th cross,hno.441,pincode-560076,Bangalore</h6>
            <div style = {{display : "flex"}}> 
            <img src={icon} width={25} height={25}/>
            <h5>+918660345779</h5>
           </div>
           <div style={{display:"flex"}}>

            <img src={mailicon} width={25} height={25}/>
            <h5>livingroom@gmail.com</h5>
            
            </div>
        </div>
    )
}
export default About