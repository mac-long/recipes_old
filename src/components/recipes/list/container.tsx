export default function Container({ children }: any) {
  return (
    <div className="list-container animate-fadeIn">
      <div className="content">{children}</div>
    </div>
  );
}
