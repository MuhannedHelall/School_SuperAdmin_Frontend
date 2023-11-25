import React from "react";

function Logo() {
	return (
		<div className="flex justify-around items-center text-xl mb-6">
			<img
				src="https://picsum.photos/64"
				alt="logo"
				className="rounded-full w-16 h-16"
			/>
			<span>Eduplat</span>
		</div>
	);
}

export default Logo;
