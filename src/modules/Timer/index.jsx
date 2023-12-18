"use client";
import ModalSetting from "@/commons/components/ModalSetting";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Timer from "./Timer";

export default function IndexTimer() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [consumedSeconds, setConsumedSeconds] = useState(0);

  const [openSetting, setOpenSetting] = useState(false);

  const pomodoroRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();

  const updateTimeDefaultValue = () => {
    setPomodoro(pomodoroRef.current.value);
    setShortBreak(shortBreakRef.current.value);
    setLongBreak(longBreakRef.current.value);
    setOpenSetting(false);
    setSeconds(0);
    setConsumedSeconds(0);
  };

  const [stage, setStage] = useState(0);

  const switchStage = (i) => {
    const isYes =
      consumedSeconds && stage !== i ? confirm("Are you sure?") : false;

    if (isYes) {
      reset();
      setStage(i);
    } else if (!consumedSeconds) {
      setStage(i);
    }
  };

  const getTickingTime = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };

    return timeStage[stage];
  };

  const updateMinute = () => {
    const updateStage = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };

    return updateStage[stage];
  };

  const reset = () => {
    setSeconds(0);
    setTicking(false);
    setConsumedSeconds(0);
    updateTimeDefaultValue();
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      reset();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSeconds(59);
    } else {
      setSeconds((second) => second - 1);
    }
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSeconds ? "Are you sure?" : null;
    };

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSeconds((seconds) => seconds + 1);
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  return (
    <div>
      <Navbar setOpenSetting={setOpenSetting} />
      <Timer
        stage={stage}
        switchStage={switchStage}
        getTickingTime={getTickingTime}
        seconds={seconds}
        ticking={ticking}
        setTicking={setTicking}
        reset={reset}
      />
      <ModalSetting
        openSetting={openSetting}
        setOpenSetting={setOpenSetting}
        pomodoroRef={pomodoroRef}
        shortBreakRef={shortBreakRef}
        longBreakRef={longBreakRef}
        updateTimeDefaultValue={updateTimeDefaultValue}
      />
    </div>
  );
}
