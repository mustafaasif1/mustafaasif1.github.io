import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => (
	<div className="flex items-center justify-center min-h-screen bg-white">
		<div className="flex flex-col items-center">
			<PulseLoader
				color="#6366f1" // This is the Tailwind indigo-500 color, adjust if needed
				size={15}
				margin={5}
				speedMultiplier={0.8}
			/>
		</div>
	</div>
);

export default Loader;
