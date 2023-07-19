import React, { useState, useEffect } from "react";
import {WatchContainer,Circle,Line} from "./WatchStyle.js";

const AnalogWatch = ({ size }) => {

  const clockCenter = size / 2;
  const clockRadius = size * 0.48;
  const hourHandLength = size * 0.2;
  const minuteHandLength = size * 0.3;
  const secondHandLength = size * 0.35;

    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
  
    const hourAngle = (hour % 12 + minute / 60) * 30; // Each hour represents 30 degrees
    const minuteAngle = (minute + second / 60) * 6; // Each minute represents 6 degrees
    const secondAngle = second * 6; // Each second represents 6 degrees
  
    return (

  
      
      <WatchContainer width={size} height={size}>
      {/* Clock Face */}
      <Circle cx={clockCenter} cy={clockCenter} r={clockRadius} />

      {/* Hour Hand */}
      <Line
        x1={clockCenter}
        y1={clockCenter}
        x2={clockCenter + hourHandLength * Math.sin((hourAngle * Math.PI) / 180)}
        y2={clockCenter - hourHandLength * Math.cos((hourAngle * Math.PI) / 180)}
      />

      {/* Minute Hand */}
      <Line
        x1={clockCenter}
        y1={clockCenter}
        x2={clockCenter + minuteHandLength * Math.sin((minuteAngle * Math.PI) / 180)}
        y2={clockCenter - minuteHandLength * Math.cos((minuteAngle * Math.PI) / 180)}
      />

      {/* Second Hand */}
      <Line
        x1={clockCenter}
        y1={clockCenter}
        x2={clockCenter + secondHandLength * Math.sin((secondAngle * Math.PI) / 180)}
        y2={clockCenter - secondHandLength * Math.cos((secondAngle * Math.PI) / 180)}
        color="red"
      />
    </WatchContainer>
  );
};

export default AnalogWatch;