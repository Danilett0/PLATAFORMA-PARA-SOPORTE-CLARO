import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };

  return (
    <div className='Box-Date'>
    <h3>{time.toLocaleString('es-CO', options)}</h3>
  </div>
  );
}

export default Clock;
