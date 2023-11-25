import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Home/HomePage";
import DepartmentsPage from "../Pages/Departments/DepartmentsPage";
import AdminsPage from "../Pages/Admins/AdminsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "/Departments",
				element: <DepartmentsPage />,
			},
			{
				path: "/Admins",
				element: <AdminsPage />,
			},
		],
	},
	{
		path: "*",
		element: <h1 className="text-center">Not Found (Error 404)!</h1>,
	},
]);

export default router;
