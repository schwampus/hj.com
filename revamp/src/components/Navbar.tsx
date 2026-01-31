import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header className="bg-darker p-6">
			<nav className="flex gap-6">
				<Link
					to="/"
					className="text-salt hover:text-shimmer transition-colors font-body"
				>
					Home
				</Link>
				<Link
					to="/about"
					className="text-salt hover:text-shimmer transition-colors font-body"
				>
					About
				</Link>
				<Link
					to="/projects"
					className="text-salt hover:text-shimmer transition-colors font-body"
				>
					Contact
				</Link>
			</nav>
		</header>
	);
}

export default Navbar;
