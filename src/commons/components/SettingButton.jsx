import { BiCog } from "react-icons/bi";

export default function SettingButton({ onClick }) {
  return (
    <button onClick={onClick} className="p-1 items-center   rounded">
      <BiCog size={24} />
    </button>
  );
}
