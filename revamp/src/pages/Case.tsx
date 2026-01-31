import Navbar from "../components/Navbar";

function Case() {
	return (
		<div className="min-h-screen bg-darkest text-salt">
			<Navbar />
			<h1 className="text-4xl font-display">Case Page</h1>
			<p className="font-body">
				Learn more about this case that is dynamically renderd...
			</p>
		</div>
	);
}

export default Case;
