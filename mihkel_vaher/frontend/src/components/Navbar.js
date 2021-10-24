import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <img src="embleem.jpg" alt="" className="logo"/>
            </Link>
            <Link to="cart">
                <img src="cart.svg" alt="" className="cart"/>   
            </Link>
            <Link to="view-category">
                <div className="viewcategory">Vaata kategooria</div>  
            </Link> 
        </div>
    );
}
export default Navbar;