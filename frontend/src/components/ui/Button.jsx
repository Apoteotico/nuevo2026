export function Button({ onClick, children }) {
  return (
    <button
      className="bg-red-900 px-4 py-1 rounded-md my-2 disabled:bg-red-900"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
