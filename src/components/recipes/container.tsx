export default function RecipeListContainer({children}: any) {
  return (
    <div className="list-container">
      <div className="content">{children}</div>
    </div>
  );
}
