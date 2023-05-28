export default function Instructions({
  loading,
  instructions,
}: {
  loading: boolean;
  instructions: string[];
}) {
  return (
    <div className="flex flex-col lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:gap-x-8 lg:px-0 lg:mx-auto lg:w-full lg:max-w-lg">
      <h2 className={`${loading && "skeleton w-[150px]"}`}>Instructions</h2>
      <div className="lg:pr-4">
        <div className="max-w-xl text-base leading-7 lg:max-w-lg text-slate-700">
          <ol className="md:p-0">
            {loading ? (
              <>
                <li className="skeleton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque voluptatum nihil facere sunt aspernatur vitae amet
                  consequatur earum quia odio voluptas laboriosam iure quidem
                  dignissimos assumenda ratione a, autem neque?
                </li>
                <li className="skeleton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque voluptatum nihil facere sunt aspernatur vitae amet
                  consequatur earum quia odio voluptas laboriosam iure quidem
                  dignissimos assumenda ratione a, autem neque?
                </li>
                <li className="skeleton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque voluptatum nihil facere sunt aspernatur vitae amet
                  consequatur earum quia odio voluptas laboriosam iure quidem
                  dignissimos assumenda ratione a, autem neque?
                </li>
              </>
            ) : (
              <>
                {instructions?.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
