import { useEffect, Suspense, lazy } from "react";
import ReactGA from "react-ga4";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/common/loader";
import { TRACKING_ID } from "./data/tracking";
import "./utils/icons"; // Import icons library
import "./app.css";

const Homepage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Articles = lazy(() => import("./pages/articles"));
const ReadArticle = lazy(() => import("./pages/readArticle"));
const Contact = lazy(() => import("./pages/contact"));
const Notfound = lazy(() => import("./pages/404"));

const App = () => {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/article/:slug" element={<ReadArticle />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
