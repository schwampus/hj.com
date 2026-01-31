import Navbar from "../components/Navbar";

function About() {
	return (
		<div className="min-h-screen bg-darkest text-salt">
			<Navbar />
			<h1 className="text-4xl font-display">About Page</h1>
			<p className="font-body">Learn more about me...</p>
		</div>
	);
}

export default About;
