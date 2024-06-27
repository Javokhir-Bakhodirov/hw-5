import "./App.module.css";
import Hero from "./components/hero/Hero.jsx";
import MostP from "./components/mostPopular/MostP.jsx";
import Nav from "./components/nav/Nav.jsx";
import NewR from "./components/newRel/NewR.jsx";

function App() {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<section>
					<Hero />
				</section>
				<section>
					<MostP />
				</section>
				<section>
					<NewR />
				</section>
			</main>
		</>
	);
}

export default App;
