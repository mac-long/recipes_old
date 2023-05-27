import {getRecipeFilterCategories} from "@/app/lib/kysely";
import {AdjustmentsVerticalIcon} from "@heroicons/react/24/outline";
import Select from "./select";

export default async function Filters() {
  const {meals, cuisines} = await getRecipeFilterCategories();

  return (
    <div className="space-y-2">
      <h3 className="flex items-center space-x-1 m-0">
        <AdjustmentsVerticalIcon className="w-5 h-5" /> <span>Filters</span>
      </h3>
      <div className="flex space-x-4">
        <Select label="Meals" options={meals} />
        <Select label="Cuisines" options={cuisines} />
      </div>
    </div>
  );
}
