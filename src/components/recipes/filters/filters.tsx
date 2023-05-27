"use client";
import {AdjustmentsVerticalIcon} from "@heroicons/react/24/outline";
import Select from "./select";

export default function Filters({
  filters,
  setFilters,
  recipes,
  setRecipes,
  recipesData,
  meals,
  cuisines
}: any) {
  return (
    <div className="space-y-2">
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
    </div>
  );
}
