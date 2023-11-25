import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="grid grid-cols-12 bg-gray-100 font-poppins">
			<div className="col-span-2 sticky left-0 top-0 flex flex-col justify-between h-screen p-4 border-r shadow">
				<Sidebar />
			</div>
			<div className="col-span-10 h-full min-h-screen">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
}

export default App;
