"use client";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Form() {
	const [formResponse, setformResponse] = useState<any>({
		status: null,
		message: "Subscribe",
	});
	const handleSubmit = async (event: any) => {
		event.preventDefault();

		setformResponse({ status: "loading", message: "Loading..." });

		const response = await fetch("/api/newsletter", {
			method: "POST",
			headers: {
				"Content-Type": "applications/json",
			},
			body: JSON.stringify({
				name: event.target.name.value,
				email: event.target.email.value,
			}),
		}).then((res) => res.json());

		await setformResponse(response);

		setTimeout(() => {
			setformResponse({
				status: null,
				message: "Subscribe",
			});
			event.target.reset();
		}, 4000);
	};
	return (
		<form
			className="flex gap-x-4 items-end mt-6 max-w-md"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2">
				<label htmlFor="name" className="sr-only">
					Your name
				</label>
				<input
					name="name"
					type="text"
					data-testid="name"
					autoComplete="name"
					required
					className="flex-auto py-2 px-3.5 min-w-0 text-white rounded-md border-0 ring-1 ring-inset shadow-sm sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-teal-500 bg-white/5 ring-white/10"
					placeholder="What should we call you?"
				/>
				<label htmlFor="email" className="sr-only">
					Email address
				</label>
				<input
					name="email"
					type="email"
					data-testid="email"
					autoComplete="email"
					aria-labelledby="Emaill address"
					required
					className="flex-auto py-2 px-3.5 min-w-0 text-white rounded-md border-0 ring-1 ring-inset shadow-sm sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-teal-500 bg-white/5 ring-white/10"
					placeholder="Enter your email"
				/>
			</div>
			<button
				type="submit"
				className={`flex-none py-2.5 px-3.5 text-sm font-semibold text-white bg-teal-500 rounded-md shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500
         ${formResponse.status === 500 && "bg-red-400"} ${
					formResponse.status === 200 && "bg-green-300 text-black"
				}`}
			>
				<div className="icon">
					{formResponse.status === 200 && (
						<CheckCircleIcon className="w-5 h-5" />
					)}
					{formResponse.status === "loading" && (
						<div className="inline-block w-5 h-5 rounded-full border-4 border-current border-solid animate-spin border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
					)}
					{formResponse.status === 500 && <XCircleIcon className="w-5 h-5" />}
					<span>{formResponse.message}</span>
				</div>
			</button>
		</form>
	);
}
