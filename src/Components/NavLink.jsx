import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
    return (
        <Link to={href} className="text-background ">
            {title}
        </Link>
    )
}

export default NavLink