"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { UserButton, useAuth } from "@clerk/nextjs";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Recipes", href: "/recipes" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	const { userId } = useAuth();

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav className="flex justify-between items-center p-6 lg:px-8">
				<Logo />
				<div className="flex space-x-4 lg:hidden">
					<UserButton afterSignOutUrl="/" />
					<button
						type="button"
						className="inline-flex justify-center items-center rounded-md text-slate-700"
						onClick={() => setMobileMenuOpen(true)}
						data-testid="open-menu"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="w-6 h-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden items-center lg:flex lg:gap-x-12">
					{navigation.map(({ name, href }) => (
						<Link
							key={name}
							href={href}
							target={name === "Github" ? "_blank" : "_self"}
							rel={name === "Github" ? "noreferrer" : ""}
							className={`text-sm font-semibold leading-6 text-slate-900 ${
								href === pathname && "text-teal-600 border-b-2 border-teal-600"
							}`}
						>
							{name}
						</Link>
					))}
					{!userId && <Link href="/log-in">Log in</Link>}
					{userId && <UserButton afterSignOutUrl="/" />}
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="overflow-y-auto fixed inset-y-0 right-0 z-50 py-6 px-6 w-full bg-white sm:max-w-sm md:animate-slideRight">
					<div className="flex justify-between items-center">
						<Logo />
						<button
							type="button"
							className="p-2.5 -m-2.5 rounded-md text-slate-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close main menu.</span>
							<XMarkIcon
								className="w-6 h-6"
								aria-hidden="true"
								aria-label="Close menu"
							/>
						</button>
					</div>
					<div className="flow-root mt-6">
						<div className="-my-6 divide-y">
							<div className="py-6 space-y-2">
								{navigation.map(({ href, name }) => (
									<Link
										key={name}
										href={href}
										className={`block py-2 px-3 -mx-3 text-base font-semibold leading-7 text-slate-900 rounded-lg hover:bg-gray-50 ${
											href === pathname && "text-teal-600"
										}`}
									>
										{name}
									</Link>
								))}
							</div>
							<div className="py-6">
								{!userId && (
									<Link
										href="/sign-in"
										className="block py-2.5 px-3 -mx-3 text-base font-semibold leading-7 rounded-lg hover:bg-gray-50 text-slate-900"
									>
										Log in
									</Link>
								)}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
