import { NavLink } from "react-router";
import { useState } from "react";
import About from "./About";
import '../styles/Navigation.css';

export default function Navigation() {
	const [isAboutOpen, setAboutOpen] = useState<boolean>(false);

	return (
		<>
			<nav className="navParent">
				<NavLink to="/" end className="navLinkText">
					Home
				</NavLink>
				<span className="verticalSeparator"></span>

				<NavLink to="/3d-visualizer" end className="navLinkText">
					3D Visualizer
				</NavLink>
				<span className="verticalSeparator"></span>

				<NavLink
					to="javascript:void(0)"
					onClick={() => setAboutOpen(!isAboutOpen)}
					className="navLinkText"
				>
					About
				</NavLink>
				<span className="verticalSeparator"></span>

				<NavLink to="https://github.com/iconsumeplutonium/six-degrees-of-fortnite" end className="navLinkText">
					GitHub
				</NavLink>
			</nav>

			{isAboutOpen && (
				<div className="aboutOverlay" onClick={() => setAboutOpen(false)}>
					<div onClick={(e) => e.stopPropagation()}>
						<About />
					</div>
				</div>
			)}
		</>
	)
}
