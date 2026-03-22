import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="flex justify-center bg-darkest p-2 gap-6">
			<Link
				to="/"
				className="text-sand hover:text-shimmer transition-colors font-body"
			>
				Home
			</Link>
			<Link
				to="/about"
				className="text-sand hover:text-shimmer transition-colors font-body"
			>
				About
			</Link>
			<Link
				to="/projects"
				className="text-sand hover:text-shimmer transition-colors font-body"
			>
				Contact
			</Link>
		</nav>
	);
}

export default Navbar;
