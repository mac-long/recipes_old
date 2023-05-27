"use client";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {Fragment, useState} from "react";

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

    if (label === "Cuisines") newFilters = {...filters, cuisine: e};
    else newFilters = {...filters, meal: e};
    setFilters(newFilters);
  };

  return (
    <Listbox value={selected} onChange={(e) => handleChange(e)}>
      {({open}) => (
        <div className="flex flex-col items-start">
          <Listbox.Label className="font-semibold">{label}</Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative cursor-pointer mb-4 sm:mb-0 rounded-md pl-3 w-[150px] h-7 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span>{selected}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
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
              <Listbox.Options className="absolute cursor-pointer z-20 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option: string) => (
                  <Listbox.Option key={option} value={option}>
                    {({selected}) => (
                      <div className="flex  items-center">
                        <span
                          className={`block truncate ${
                            selected && "font-semibold"
                          }`}
                        >
                          {option}
                        </span>

                        {selected ? (
                          <span className={"flex items-center pr-4"}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
