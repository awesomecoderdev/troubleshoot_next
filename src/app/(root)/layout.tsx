"use client";

import React, { Fragment, useEffect } from "react";

import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { ModalProvider } from "@/providers/modal-provider";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Animator } from "@/components/Contents";
import { Layout } from "@/components/Layout";

const SetupPage: React.FC<PageProps> = ({ children = null, modal }) => {
	const onOpen = useStoreModal((state) => state.onOpen);
	const isOpen = useStoreModal((state) => state.isOpen);

	useEffect(() => {
		// if (!isOpen) {
		// 	onOpen();
		// }
	}, [isOpen, onOpen]);

	useEffect(() => {
		if (!isOpen) {
			onOpen();
		}
	}, []);

	return (
		<Fragment>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				// defaultTheme="light"
				enableSystem
			>
				<Animator>{modal}</Animator>

				<ToastProvider />
				<ModalProvider />
				<Layout>{children}</Layout>
			</ThemeProvider>
		</Fragment>
	);
};

export default SetupPage;
