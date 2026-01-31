function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
			<div className="bg-white p-8 rounded-2xl shadow-2xl">
				<h1 className="text-4xl font-display text-gray-800 mb-4">
					Hello Tailwind v4! 🎉
				</h1>
				<p className="text-gray-600 font-body mb-6">
					The new setup is much simpler!
				</p>
				<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
					Click me
				</button>
			</div>
		</div>
	);
}

export default App;
