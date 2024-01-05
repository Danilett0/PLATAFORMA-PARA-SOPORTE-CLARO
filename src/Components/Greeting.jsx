import React, { useState, useEffect } from 'react';

function Greeting() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let greeting;

  if (time.getHours() >= 0 && time.getHours() < 12) {
    greeting = 'Buenos días';
  } else if (time.getHours() >= 12 && time.getHours() < 19) {
    greeting = 'Buenas tardes';
  } else {
    greeting = 'Buenas noches';
  }

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;
