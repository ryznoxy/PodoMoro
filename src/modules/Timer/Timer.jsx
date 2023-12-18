import StartButton from "@/commons/components/StartButton";
import SettingButton from "@/commons/components/SettingButton";
import Navbar from "../Navbar";
export default function Timer({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  setTicking,
  reset,
}) {
  const options = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-12">
      <div className="flex gap-5">
        {options.map((option, i) => (
          <h1
            key={i}
            className={`${
              i === stage ? "bg-neutral-700 text-white" : ""
            } font-medium p-1 rounded cursor-pointer `}
            onClick={() => switchStage(i)}
          >
            {option}
          </h1>
        ))}
      </div>

      <div className="mt-4">
        <h1 className="text-9xl font-bold select-none">
          {getTickingTime()}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>
      <div className="flex gap-4 flex-col">
        <StartButton onClick={() => setTicking(!ticking)}>
          {ticking ? "Stop" : "Start"}
        </StartButton>
        {ticking ? (
          <button className="bg-red-500 rounded" onClick={reset}>
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
}
