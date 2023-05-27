'use client';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';

export default function Select({
  filters,
  setFilters,
  recipes,
  setRecipes,
  recipesData,
  label,
  options
}: any) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = async (e: any) => {
    let newFilters;
    setSelected(e);

    if (label === 'Cuisines') newFilters = { ...filters, cuisine: e };
    else newFilters = { ...filters, meal: e };
    setFilters(newFilters);
  };

  return (
    <Listbox value={selected} onChange={(e) => handleChange(e)}>
      {({ open }) => (
        <div className="flex flex-col items-start">
          <Listbox.Label className="font-semibold">{label}</Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative pl-3 mb-4 h-7 text-left rounded-md ring-1 ring-inset shadow-sm cursor-pointer sm:mb-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none w-[150px]">
              <span>{selected}</span>
              <span className="flex absolute inset-y-0 right-0 items-center pr-2 ml-3 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="overflow-auto absolute z-20 py-1 mt-1 w-full max-h-56 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg cursor-pointer sm:text-sm focus:outline-none">
                {options.map((option: string) => (
                  <Listbox.Option key={option} value={option}>
                    {({ selected }) => (
                      <div className="flex items-center">
                        <span
                          className={`block truncate ${
                            selected && 'font-semibold'
                          }`}
                        >
                          {option}
                        </span>

                        {selected ? (
                          <span className={'flex items-center pr-4'}>
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
