export default function StartButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-neutral-600  py-3 px-9 rounded-xl text-white"
    >
      {children}
    </button>
  );
}
