'use client';
import { Menu, Transition } from '@headlessui/react';
import { ShareIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { Clipboard, Mail, Smartphone } from 'react-feather';

export default function ShareButton({ title, summary }: any) {
  const message =
    'Checkout this awesome recipe I found on Super Simple Recipes: ';
  const url = 'https://recipe-sands.vercel.app';
  const pathname = usePathname();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <ShareIcon className="w-5 h-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 -left-16 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex">
            <Menu.Item>
              <a
                href={`mailto:?subject=Check%20Out%20This%20Interesting%20Recipe&body=${message}%0A${url}${pathname}%0A%0AEnjoy%21%0A%0A`}
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-2 text-sm hover:bg-gray-300 rounded-l-md"
              >
                <Mail />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href={`sms:&body=${message} ${url}${pathname}`}
                className="block px-4 py-2 text-sm hover:bg-gray-300"
              >
                <Smartphone />
              </a>
            </Menu.Item>
            <Menu.Item>
              <button
                className="block px-4 py-2 text-sm hover:bg-gray-300 hover:rounded-r-md hover:text-indigo-500"
                onClick={() =>
                  navigator.clipboard.writeText(`${url}${pathname}`)
                }
              >
                <Clipboard />
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
