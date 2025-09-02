import { useEffect, useState } from "react";

function LagosClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Africa/Lagos",
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center mt-12">
      <p className="text-sm text-gray-400 tracking-widest  md:text-2xl font-future  mb-2">LOCAL TIME</p>
      <p className="text-2xl md:text-4xl text-gray-500 mb-4 font-light font-future">[ LAGOS, NIGERIA ]</p>
      <h1 className=" text-5xl md:text-9xl font-future font-bold tracking-widest">{time}</h1>
    </div>
  );
}

export default LagosClock;
