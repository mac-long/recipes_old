export default function RecipesHeading({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
        {title}.
      </h2>
      <p className="mt-2 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}
