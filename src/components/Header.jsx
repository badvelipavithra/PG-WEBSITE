import logo from "../assets/Screenshot 2023-11-14 210824.png"
const Header=()=>{

    return(
        <div className="header">
        <img src={logo} width={100} height={100} color="white" id="logo" alt="" /> 
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
         <li className="navElement"  onClick ={() => {
         const anchor = document.querySelector('#facilities')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}>Prices</li>
        </ul>
     </div>
    )
}
export default Header