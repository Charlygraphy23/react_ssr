import React from "react";
import "./style.css";

const App = () => {
	return (
		<div>
			<h1 className='csr'>This is colored when rendered in client side</h1>
			<h1 style={{ color: "blue" }}>
				This is colored when rendered in client side and server side
			</h1>
		</div>
	);
};

export default App;
