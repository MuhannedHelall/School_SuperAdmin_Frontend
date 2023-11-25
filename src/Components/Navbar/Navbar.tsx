import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { TbListSearch } from "react-icons/tb";

function Navbar() {
	const [searchValue, setSearchValue] = useState<string>("");
	function handleSearch(e: any) {
		e.preventDefault();
		console.log(searchValue);
	}
	return (
		<div className="sticky top-0 h-20 flex justify-between items-center px-10 bg-transparent">
			<form
				onSubmit={handleSearch}
				className="flex justify-center items-center space-x-2"
			>
				<label htmlFor="Search">
					<CiSearch className="cursor-pointer w-12 h-12 p-2 rounded-full hover:bg-gray-200" />
				</label>
				<button
					type="submit"
					className={`text-2xl rounded-full hover:bg-gray-200 p-2 
					${searchValue.length > 3 || "invisible"}`}
				>
					<TbListSearch />
				</button>
			</form>
			<input
				id="Search"
				type="text"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				className="w-2/3 h-2/3 text-center bg-transparent outline-none rounded-lg focus:bg-gray-200"
			/>
			<ul className="flex justify-center items-center space-x-4">
				<li className="rounded-full hover:bg-gray-200 p-2">
					<FaBell className="cursor-pointer text-2xl" />
				</li>
				<li className="rounded-full hover:bg-gray-200 p-2">
					<IoLanguage className="cursor-pointer text-2xl" />
				</li>
				<li>
					<img
						src="https://picsum.photos/75"
						alt="avatar"
						className="w-10 h-10 rounded-full cursor-pointer"
					/>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
