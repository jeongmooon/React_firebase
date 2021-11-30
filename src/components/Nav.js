import { authService } from "fbase";
import { Link } from "react-router-dom";

function Nav(isLoggedIn) {
  
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/edit">EditProfile</Link>
      </li>
        { isLoggedIn ? (<button
          onClick={(evnet) =>{
            authService.signOut();
          }}>
            Logout
        </button>) : (
        <>123</>
        )}        
    </ul>
  );  
}


export default Nav;