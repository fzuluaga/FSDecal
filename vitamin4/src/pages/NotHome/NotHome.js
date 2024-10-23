import React, { useState, useEffect } from 'react';

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 5) {
      setMessage("You passed 5!");
    } else {
      setMessage("");
    }
  }, [count]);

  return (
    <div className="center-content">
      <h1>This is NotHome Page</h1>
      <p>Counter: {count}</p>
      {message && <p>{message}</p>}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default NotHome;
