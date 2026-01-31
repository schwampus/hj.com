import Navbar from "../components/Navbar";
function Home() {
	return (
		<div className="min-h-screen bg-darkest text-salt">
			<header className="justify-center   py-2 px-4 flex min-h-20 max-h-70">
				<section className="self-end">
					<h1 className="text-8xl text-shimmer font-display">Hampus</h1>
					<h1 className="text-8xl text-shimmer font-display">Jerkfelt</h1>
					<p className="font-body text-salt">Welcome to my site!</p>
				</section>
				<section className="px-8">
					<img src="/Hero.png" className="h-full" />
				</section>
			</header>
			<Navbar />
		</div>
	);
}

export default Home;
