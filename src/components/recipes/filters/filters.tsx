"use client";
import {
  AdjustmentsVerticalIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import Select from "./select";

export default function Filters({
  filters,
  setFilters,
  query,
  setQuery,
  recipes,
  setRecipes,
  recipesData,
  meals,
  cuisines
}: any) {
  return (
    <div className="space-y-2 w-full">
      <h3 className="flex items-center space-x-1 m-0">
        <AdjustmentsVerticalIcon className="w-5 h-5" /> <span>Filters</span>
      </h3>
      <div className="flex space-x-4">
        <Select
          filters={filters}
          setFilters={setFilters}
          recipes={recipes}
          setRecipes={setRecipes}
          recipesData={recipesData}
          label="Cuisines"
          options={cuisines}
        />
        <Select
          filters={filters}
          setFilters={setFilters}
          recipes={recipes}
          setRecipes={setRecipes}
          recipesData={recipesData}
          label="Meals"
          options={meals}
        />
      </div>
      <div className="min-w-full flex justify-between items-center">
        <input
          className="w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sms"
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a recipe title..."
        />
        {query?.length > 0 && (
          <XCircleIcon
            className="cursor-pointer ml-2 text-gray-400 w-5 h-5"
            onClick={() => setQuery("")}
          />
        )}
      </div>
    </div>
  );
}
