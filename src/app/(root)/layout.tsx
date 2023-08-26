import { cn, constructMetadata } from "@/lib/utils";
import { cookies as getCookies } from "next/headers";
import { getUserFromSession } from "@/lib/buffer";
import BaseLayout from "@/components/BaseLayout";

const Layout: React.FC<PageProps> = ({ children = null, modal }) => {
	const cookies = getCookies();
	const session_id = cookies.get("session_id")?.value;
	const session = getUserFromSession(session_id);

	return (
		<BaseLayout modal={modal} auth={session}>
			{children}
		</BaseLayout>
	);
};

export default Layout;
