import React from "react";
import { getData } from "../services/firebase";

function useData(isEnd) {
	const [Data, setData] = React.useState([]);

	React.useEffect(() => {
		const unsubscribe = getData(setData);
		return unsubscribe;
	}, [isEnd]);

	return Data;
}

export { useData };
