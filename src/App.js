import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/:id' element={<Landing />} />
				<Route path='/' element={<Landing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
