function App() {
	return (
		<div
			// center the content inside div
      className="flex flex-col items-center justify-center h-screen bg-gray-900"
			>
			<iframe
				src="https://giphy.com/embed/bcKmIWkUMCjVm"
				width="480"
				height="349"
				frameBorder="0"
				class="giphy-embed"
				allowFullScreen></iframe>
			<p>
				<a href="https://giphy.com/gifs/animated-hello-waving-bcKmIWkUMCjVm">
					via GIPHY
				</a>
			</p>
		</div>
	);
}

export default App;
