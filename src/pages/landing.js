import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";
import { useData } from "../helper/useData";
import { editData } from "../services/firebase";

function Landing() {
	const [isEnd] = useState(false);
	const data = useData(isEnd);
	const location = useLocation();
	useEffect(() => {
		const id = location?.pathname?.split("/")[1];
		if (id) editData(id, { isScanned: true });
	}, [location.pathname]);
	if (data.length > 0) {
		return (
			<div className='App'>
				<QRCode value={`http://localhost:3000/${data[0].id}`} />
			</div>
		);
	}
}

export default Landing;
