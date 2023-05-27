export default function RecipeListContainer({children}: any) {
  return (
    <div className="list-container border-b border-gray-300">
      <div className="content">{children}</div>
    </div>
  );
}
