import React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";

function DepartmentsPage() {
	return (
		<div className="mx-10 p-5">
			<div className="flex justify-between items-center mb-10">
				<h1 className="text-2xl font-bold">Departments</h1>
				<button className="bg-black text-white p-2 rounded-lg flex items-center space-x-2">
					<FaPlus />
					<span>New Department</span>
				</button>
			</div>
			<div className="p-4 bg-white rounded-xl">
				<div className="flex justify-between items-center px-4">
					<input
						type="text"
						className="border h-14 p-2 outline-blue-700 leading-10 rounded-lg"
						placeholder="Search department ..."
					/>
					<button className="p-2 text-xl rounded-full hover:bg-gray-100">
						<IoFilter />
					</button>
				</div>
			</div>
		</div>
	);
}

export default DepartmentsPage;
