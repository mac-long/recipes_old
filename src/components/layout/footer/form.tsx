"use client";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NewsletterForm() {
  const [formResponse, setformResponse] = useState<any>({
    status: null,
    message: "Subscribe"
  });
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setformResponse({ status: "loading", message: "Loading..." });

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json"
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value
      })
    }).then((res) => res.json());

    await setformResponse(response);

    if (response.status === 500)
      setTimeout(() => {
        setformResponse({
          status: null,
          message: "Subscribe"
        });
      }, 3000);
  };
  return (
    <form
      className="flex gap-x-4 mt-6 max-w-md items-end"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2">
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          className="flex-auto py-2 px-3.5 min-w-0 text-white rounded-md border-0 ring-1 ring-inset shadow-sm sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-white/5 ring-white/10"
          placeholder="What should we call you?"
        />
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="flex-auto py-2 px-3.5 min-w-0 text-white rounded-md border-0 ring-1 ring-inset shadow-sm sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-white/5 ring-white/10"
          placeholder="Enter your email"
        />
      </div>
      <button
        type="submit"
        className={`flex-none py-2.5 px-3.5 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
         ${formResponse.status === 500 && "bg-red-400"} ${
          formResponse.status === 200 && "bg-green-300 text-black"
        }`}
      >
        <div className="flex items-center space-x-2">
          {formResponse.status === 200 && (
            <CheckCircleIcon className="w-5 h-5" />
          )}
          {formResponse.status === "loading" && (
            <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          )}
          {formResponse.status === 500 && <XCircleIcon className="w-5 h-5" />}
          <span>{formResponse.message}</span>
        </div>
      </button>
    </form>
  );
}
