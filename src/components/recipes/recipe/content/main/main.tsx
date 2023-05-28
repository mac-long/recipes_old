import CreationTime from "./CreationTime";
import Heading from "./Heading";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Summary from "./Summary";

export default function Main({
  loading,
  meal,
  title,
  summary,
  ingredients,
  cooking_time,
  instructions,
}: {
  loading: boolean;
  meal: string;
  title: string;
  summary: string;
  ingredients: string[];
  cooking_time: string;
  instructions: string[];
}) {
  return (
    <>
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <Heading loading={loading} meal={meal} title={title} />
          <Summary loading={loading} summary={summary} />
          <Ingredients loading={loading} ingredients={ingredients} />
          <CreationTime loading={loading} cooking_time={cooking_time} />
        </div>
      </div>
      <Instructions loading={loading} instructions={instructions} />
    </>
  );
}
