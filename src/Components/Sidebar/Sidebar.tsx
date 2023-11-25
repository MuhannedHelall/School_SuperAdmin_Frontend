import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import List from "./List";
import { CiSettings } from "react-icons/ci";

function Sidebar() {
	const location = useLocation();
	const [tab, setTab] = useState<string>(location.pathname);
	return (
		<>
			<div>
				<Logo />
				<div className="flex justify-around items-center py-4 rounded-lg bg-gray-200 mb-6">
					<img
						src="https://picsum.photos/48"
						alt="avatar"
						className="w-12 h-12 rounded-full"
					/>
					<h4>Super Admin</h4>
				</div>
				<List tab={tab} setTab={setTab} />
			</div>
			<ul>
				<li>
					<Link
						className="flex items-center justify-start gap-3 rounded-lg hover:bg-gray-200 p-3 my-3"
						to={"/settings"}
					>
						<CiSettings className="text-2xl" />
						<span>Settings</span>
					</Link>
				</li>
			</ul>
		</>
	);
}

export default Sidebar;
