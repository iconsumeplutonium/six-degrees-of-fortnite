import { NavLink } from "react-router";

function Navigation() {
	return (
		<nav>
			<NavLink to="/" end>
				Home
			</NavLink>
			<NavLink to="/about" end>
				About
			</NavLink>
			<NavLink to="https://github.com/iconsumeplutonium/six-degrees-of-fortnite" end>
                Github
            </NavLink>
		</nav>
	)
}

export default Navigation;