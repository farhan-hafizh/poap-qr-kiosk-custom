import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";
import { useData } from "./helper/useData";

function App() {
	const [isEnd] = useState(false);
	const data = useData(isEnd);

	if (data.length > 0) console.log(data);
	return (
		<div className='App'>
			<QRCode value={`http://localhost:3000/${data[0].id}`} />
		</div>
	);
	return null;
}

export default App;
