import Share from "./Share";

export default function Heading({
  loading,
  meal,
  title,
}: {
  loading: boolean;
  meal: string;
  title: string;
}) {
  return (
    <>
      <span
        className={`text-base font-semibold leading-7 ${
          loading ? "skeleton" : "text-teal-600"
        }`}
      >
        {meal ? meal : "Test"}
      </span>
      <h1
        className={`space-x-3 mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          loading ? "skeleton" : "text-slate-900"
        }`}
      >
        <span>{title ? title : "Some Great Title"}</span>
        <Share title={title} />
      </h1>
    </>
  );
}
