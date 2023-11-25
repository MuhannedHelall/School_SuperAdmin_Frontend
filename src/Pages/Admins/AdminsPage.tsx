import React from "react";
import { IoFilter } from "react-icons/io5";
import { FaPlus, FaEllipsisVertical } from "react-icons/fa6";

function AdminsPage() {
	return (
		<div className="mx-10 p-5">
			<div className="flex justify-between items-center mb-10">
				<h1 className="text-2xl font-bold">Admins</h1>
				<button className="bg-black text-white p-2 rounded-lg flex items-center space-x-2">
					<FaPlus />
					<span>New Admin</span>
				</button>
			</div>
			<div className="p-4 bg-white rounded-xl">
				<div className="flex justify-between items-center px-4">
					<input
						type="text"
						className="border h-14 p-2 outline-blue-700 leading-10 rounded-lg"
						placeholder="Search admin ..."
					/>
					<button className="p-2 text-xl rounded-full hover:bg-gray-100">
						<IoFilter />
					</button>
				</div>

				<div className="relative overflow-x-auto sm:rounded-lg mt-5">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="p-4">
									<div className="flex items-center">
										<input
											id="checkbox-all-search"
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="checkbox-all-search"
											className="sr-only"
										>
											checkbox
										</label>
									</div>
								</th>
								<th scope="col" className="px-6 py-3">
									Name
								</th>
								<th scope="col" className="px-6 py-3">
									Department
								</th>
								<th scope="col" className="px-6 py-3">
									Status
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="w-4 p-4">
									<div className="flex items-center">
										<input
											id="checkbox-table-search-1"
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="checkbox-table-search-1"
											className="sr-only"
										>
											checkbox
										</label>
									</div>
								</td>
								<th
									scope="row"
									className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
								>
									<img
										className="w-12 h-12 rounded-full"
										src="https://picsum.photos/id/1/75"
										alt="Jese"
									/>
									<div className="ps-3">
										<div className="text-base font-semibold">
											Neil Sims
										</div>
										<div className="font-normal text-gray-500">
											neil.sims@flowbite.com
										</div>
									</div>
								</th>
								<td className="px-6 py-4">Students Affair</td>
								<td className="px-6 py-4">
									<div className="flex items-center">
										<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
										Active
									</div>
								</td>
								<td className="px-6 py-4">
									<FaEllipsisVertical className="ml-3 text-2xl cursor-pointer" />
								</td>
							</tr>
							<tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="w-4 p-4">
									<div className="flex items-center">
										<input
											id="checkbox-table-search-3"
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="checkbox-table-search-3"
											className="sr-only"
										>
											checkbox
										</label>
									</div>
								</td>
								<th
									scope="row"
									className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									<img
										className="w-12 h-12 rounded-full"
										src="https://picsum.photos/id/5/75"
										alt="Jese"
									/>
									<div className="ps-3">
										<div className="text-base font-semibold">
											Leslie Livingston
										</div>
										<div className="font-normal text-gray-500">
											leslie@flowbite.com
										</div>
									</div>
								</th>
								<td className="px-6 py-4">Teaching</td>
								<td className="px-6 py-4">
									<div className="flex items-center">
										<div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
										InActive
									</div>
								</td>
								<td className="px-6 py-4">
									<FaEllipsisVertical className="ml-3 text-2xl cursor-pointer" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default AdminsPage;
