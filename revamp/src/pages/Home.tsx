import Navbar from "../components/Navbar";
function Home() {
	return (
		<div className="min-h-screen bg-darkest text-salt">
			<Navbar />
			<h1 className="text-4xl text-shimmer font-display">Hampus Jerkfelt</h1>
			<p className="font-body text-salt">Welcome to my site!</p>
		</div>
	);
}

export default Home;
