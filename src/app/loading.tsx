"use client";

import { Motion } from "@/components/Contents";
import { Loader } from "@/components/ui/loader";

const Loading = () => {
	return (
		<Motion
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.75,
				ease: "easeInOut",
			}}
			exit={{ opacity: 0 }}
			className="fixed inset-0 flex h-full min-h-screen w-screen items-center justify-center z-50 mx-auto"
		>
			<Loader />
		</Motion>
	);
};

export default Loading;
