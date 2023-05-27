export default function Container({children}: any) {
  return (
    <div className="list-container">
      <div className="content">{children}</div>
    </div>
  );
}
