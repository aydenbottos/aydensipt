import React, { useEffect, useState } from "react";

interface TimeProps {
  startTime: string;
}

const TimeDisplay: React.FC<TimeProps> = ({ startTime }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateInterval = setInterval(() => {
      try {
        setTime(
          new Date(
            Number(new Date()) -
              Number(new Date(new Date().toDateString() + " " + startTime))
          )
            .toUTCString()
            .slice(17, 25)
        );
      } catch (e) {
        if (e instanceof TypeError) {
          setTime("");
        } else {
          throw e;
        }
      }
    }, 200);

    return () => clearInterval(updateInterval);
  }, [startTime]);

  return <>{time}</>;
};

export default TimeDisplay;
