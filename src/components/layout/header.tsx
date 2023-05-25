"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "./logo";

const navigation = [
  { name: "Recipes", href: "/recipes" },
  { name: "Author", href: "https://mac-long.vercel.app" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex justify-between items-center p-6 lg:px-8">
        <Logo />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex justify-center items-center text-gray-700 rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="overflow-y-auto fixed inset-y-0 right-0 z-50 py-6 px-6 w-full bg-white sm:max-w-sm">
          <div className="flex justify-between items-center">
            <Logo />
            <button
              type="button"
              className="p-2.5 -m-2.5 text-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon
                className="w-6 h-6"
                aria-hidden="true"
                aria-label="Close menu"
              />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 px-3 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="block py-2.5 px-3 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
