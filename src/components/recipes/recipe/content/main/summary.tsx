export default function Summary({
  loading,
  summary,
}: {
  loading: boolean;
  summary: string;
}) {
  return (
    <p
      className={`mt-6 text-xl leading-8 ${
        loading ? "skeleton h-7" : "text-slate-700"
      }`}
    >
      {summary}
    </p>
  );
}
