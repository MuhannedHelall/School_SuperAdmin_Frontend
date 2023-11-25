import React from "react";
import { Link } from "react-router-dom";
import { ImStatsBars2 } from "react-icons/im";
import { FaUserTie } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

interface IProps {
	tab: string;
	setTab: (_: string) => void;
}

function List({ tab, setTab }: IProps) {
	return (
		<ul>
			<li onClick={() => setTab("/")}>
				<Link
					to={"/"}
					className={`flex items-center justify-start gap-3 rounded-lg hover:bg-gray-200 
					${tab === "/" && "bg-gray-200 text-blue-700"} p-3 my-3`}
				>
					<ImStatsBars2 className="text-xl" />
					<span>Home</span>
				</Link>
			</li>
			<li onClick={() => setTab("/Departments")}>
				<Link
					to={"/Departments"}
					className={`flex items-center justify-start gap-3 rounded-lg hover:bg-gray-200 
					${tab === "/Departments" && "bg-gray-200 text-blue-700"} p-3 my-3`}
				>
					<FaBuilding className="text-xl" />
					<span>Departments</span>
				</Link>
			</li>
			<li onClick={() => setTab("/Admins")}>
				<Link
					to={"/Admins"}
					className={`flex items-center justify-start gap-3 rounded-lg hover:bg-gray-200 
					${tab === "/Admins" && "bg-gray-200 text-blue-700"} p-3 my-3`}
				>
					<FaUserTie className="text-xl" />
					<span>Admins</span>
				</Link>
			</li>
		</ul>
	);
}

export default List;
