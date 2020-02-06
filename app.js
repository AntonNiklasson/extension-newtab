import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import ReactDOM from "react-dom";

function App() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(Date.now());
    }, 10000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div
      css={`
        user-select: none;
        width: 100vw;
        height: 100vh;
        display: flex;
        background-color: hsl(226, 50%, 90%);
        color: hsl(210, 50%, 30%);

        text-shadow: 4px 4px 1px hsl(195, 95%, 13%);
        font-family: "Teko", sans-serif;
        font-size: 80px;
        letter-spacing: 10px;
      `}
    >
      <div
        css={`
          margin: auto;
          text-align: center;
        `}
      >
        <h1>{format(time, "HH:mm")}</h1>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
