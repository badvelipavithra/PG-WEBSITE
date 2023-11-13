import logo from "../assets/bed-7.png"
const Header=()=>{

    return(
        <div className="header">
        <img src={logo} width={100} height={100} color="white" alt="" /> 
        <ul className="topContainer" >
         <li className="navElement"  onClick ={() => {
         const anchor = document.querySelector('#home')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}} >Home</li> 
         <li className="navElement" onClick ={() => {
         const anchor = document.querySelector('#contact')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}} > contact us</li>
         <li className="navElement" onClick ={() => {
         const anchor = document.querySelector('#facilities')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}} >Facilities</li>
         <li className="navElement">features</li>
        </ul>
     </div>
    )
}
export default Header