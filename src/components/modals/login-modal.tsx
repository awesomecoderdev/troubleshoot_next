"use client";
import React, {
	useCallback,
	useRef,
	useEffect,
	MouseEventHandler,
} from "react";
import { useHydration } from "@/hooks/hydration";
// import { Modal } from "@/components/ui/modal";
import { Modal } from "@/components/Modal";
import { Prose } from "@/components/Prose";
import { fadeIn, slideIn, textVariant, textVariant2 } from "@/utils/motion";
import { Button } from "@/components/Button";
import { ArrowRightIcon, FacebookIcon, GoogleIcon } from "@/components/Icons";
import { Motion } from "@/components/Contents";
import { Mail, Phone } from "lucide-react";
import { Logo } from "../Logo";
import Link from "next/link";

const LoginModal: React.FC<PageProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Modal
				className="lg:w-[100%] overflow-clip"
				// isOpen={true}
				// onClose={() => console.log}
				// title="Skills"
				// description="Hello world"
			>
				<Prose enable={false} className="py-14">
					<div className="relative w-full flex justify-center">
						<Logo className="h-auto w-28" />
					</div>
					<div className="relative flex justify-center py-8">
						<div className="relative w-full max-w-xs space-y-4">
							<div className="relative">
								<p className="lead font-semibold text-base text-center">
									Login with
								</p>
							</div>
							<Button
								variant="filled"
								className="w-full bg-primary-500/90 hover:bg-primary-500 rounded-md py-3 font-semibold text-base"
							>
								Mobile Number or Email
							</Button>
							<div className="relative flex items-center justify-between gap-4">
								<Button
									variant="filled"
									className="w-full flex justify-center items-center bg-primary-50/90 hover:bg-primary-50 rounded-md py-2.5 font-semibold text-sm text-slate-600"
								>
									<FacebookIcon className="h-7 w-7 mr-2" />
									Facebook
								</Button>
								<Button
									variant="filled"
									className="w-full flex justify-center items-center bg-primary-50/90 hover:bg-primary-50 rounded-md py-2.5 font-semibold text-sm text-slate-600"
								>
									<GoogleIcon className="h-6 w-6 mr-2" />
									Google
								</Button>
							</div>
							<p className="text-center font-medium">
								By Signing in i agree to the{" "}
								<Link
									href="/terms-and-conditions"
									className="text-sky-400 hover:text-sky-400"
								>
									Terms & Condition
								</Link>
							</p>
							<p className="text-center font-semibold">
								Don’t have an account?
							</p>

							<div className="relative flex justify-center">
								<Button
									className="rounded-md ring-primary-500 hover:ring-primary-600 text-sm  py-2 px-5 "
									variant="outline"
								>
									Signup Now
								</Button>
							</div>
						</div>
					</div>
				</Prose>
			</Modal>
		</React.Fragment>
	);
};

export default LoginModal;
