export default function ingredients({
  loading,
  ingredients
}: {
  loading: boolean;
  ingredients: string[];
}) {
  return (
    <>
      <h2 className={`${loading && 'skeleton w-[130px]'}`}>Ingredients</h2>
      <ul>
        {loading ? (
          <>
            <li className="skeleton w-[60px]">Blank</li>
            <li className="skeleton w-[80px]">Empty</li>
            <li className="skeleton w-[120px]">Nothingness</li>
          </>
        ) : (
          <>
            {ingredients?.map((item: any) => (
              <li key={item}>{item}</li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}
