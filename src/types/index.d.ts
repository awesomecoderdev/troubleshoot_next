type LocationProps = {
	href?: any;
	protocol?: any;
	host?: any;
	hostname?: any;
	port?: any;
	pathname?: any;
	search?: any;
	hash?: any;
};

type GridPatternProps = {
	width: number;
	height: number;
	x?: number | string;
	y?: number | string;
	squares?: any[];
	className?: string;
};

type ProseProps = {
	children: React.ReactNode;
	className?: string;
	as?: any;
	enable?: boolean;
};

interface LanguageMappings {
	[key: string]: string;
}
interface PreferredLanguageState {
	preferredLanguages: any[];
	addPreferredLanguage: (language: any) => void;
}

type HeadingProps = {
	level: any;
	children?: any;
	id?: any;
	tag?: any;
	label?: any;
	anchor?: boolean;
	className?: string;
};

interface PageProps {
	children?: React.ReactNode | null;
	modal?: React.ReactNode | null;
}

interface AlertModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	loading: boolean;
}

interface LayoutProps {
	children?: React.ReactNode | null;
}

type TopLevelNavItemProps = {
	href: string;
	children: React.ReactNode;
};

interface MobileNavigationState {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
}

type GroupPathProps = {
	pathname?: string;
	group?: any;
	className?: any;
	error?: boolean;
};

type NavLinkProps = {
	href: string;
	isAnchorLink?: boolean;
	children: React.ReactNode;
	tag?: any;
	active?: boolean;
	error?: boolean;
};

type TopLevelNavItemProps = {
	href: string;
	children: React.ReactNode;
};

type Skill = {
	name: string;
	description: string;
	level: number;
	icon: any;
	technology?: string | undefined | null;
	type?: string[];
};

interface Project {
	name: string;
	description: string;
	link?: {
		href: string;
		label: string;
	};
	logo?: any;
	role?: string[];
	type?: string;
	year?: number | string;
	tags?: string[];
}

interface Testimonial {
	name: string;
	username?: string;
	description: string;
	country: string;
	date: any;
}
type PutData = [any, any, any, any];
