import { NavLink } from "react-router-dom"
import './Style.css'

const Navigation = () => {
    return (
        <nav className="navigate">
            <NavLink to='/' className= "hommie">Home</NavLink>
            <NavLink to='/Category/Bollywood' className= "bolly">Bollywood</NavLink>
            <NavLink to = '/Category/Technology' className= "techie">Technology</NavLink>
            <NavLink to = '/Category/Tourism' className="tour">Tourism</NavLink>
            <NavLink to= '/Category/Fitness' className= "fit">Fitness</NavLink>
            <NavLink to= '/Category/Food' className= "foodie">Food</NavLink>
        </nav>
    )

}

export default Navigation