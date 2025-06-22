import { NavLink } from "react-router"


function Pagenotfound(){
  return (
    <div style={{textAlign:'center', marginTop:'2rem'}}>
        <h1>Page Not Found</h1><br />
        <h2>404</h2><br /><br />
        <NavLink to="/"> <button>Go Home</button> </NavLink>
        <br />
        <br />
        <br />
        <img src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png" alt="" />
    </div>
  )
}

export default Pagenotfound
