import { useState } from "react";

export default function Timer(props) {
  const d = new Date().toLocaleTimeString("en-GB", {
    timeZone: props.timezone,
  });
  const [time, setTime] = useState(d);

  function doDate() {
    const newTime = new Date().toLocaleTimeString("en-GB", {
      timeZone: props.timezone,
    });
    setTime(newTime);
  }
  setInterval(doDate, 1000);

  return (
    <div>
      <span className="text-4xl font-semibold text-slate-50">{time}</span>
    </div>
  );
}
