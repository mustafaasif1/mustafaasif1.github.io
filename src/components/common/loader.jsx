import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<PulseLoader size={15} color="var(--link-color)" loading={true} />
		</div>
	);
};

export default Loader;
