import React from "react";
import "./App.css";
import { FormVali } from "./features/formVali/formVali";
import { RightSidebar } from "./features/rightSidebar/rightSidebar";

function App() {
	return (
		<div className="App">
			<div className="container">
				<FormVali />
				<RightSidebar />
			</div>
		</div>
	);
}

export default App;