import { NavLink } from "react-router";
import '../styles/Navigation.css';

function Navigation() {
	return (
		<nav className="navParent">
			<NavLink to="/" end className="navLinkText">
				Home
			</NavLink>
			<span className="verticalSeparator"></span>

			<NavLink to="/3d-visualizer" end className="navLinkText">
				3D Visualizer
			</NavLink>
			<span className="verticalSeparator"></span>

			<NavLink to="/about" end className="navLinkText">
				About
			</NavLink>
			<span className="verticalSeparator"></span>

			<NavLink to="https://github.com/iconsumeplutonium/six-degrees-of-fortnite" end className="navLinkText">
				GitHub
			</NavLink>
		</nav>
	)
}

export default Navigation;