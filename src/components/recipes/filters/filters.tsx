'use client';
import {
  AdjustmentsVerticalIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import Select from './select';

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
      <h3 className="flex items-center m-0 space-x-1">
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
      <div className="flex justify-between items-center min-w-full sm:pt-4">
        <input
          className="py-1.5 pl-1 w-full text-gray-900 bg-transparent sm:text-sm focus:ring-0 placeholder:text-gray-400"
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a recipe title..."
        />
        {query?.length > 0 && (
          <XCircleIcon
            className="ml-2 w-5 h-5 text-gray-400 cursor-pointer"
            onClick={() => setQuery('')}
          />
        )}
      </div>
    </div>
  );
}
