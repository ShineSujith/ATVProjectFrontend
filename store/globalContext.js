import { createContext, useState, useEffect, useRef } from "react";

const GlobalContext = createContext();
export function GlobalContextProvider(props) {
  const [globals, setGlobals] = useState({
    aString: "init val",
    queue: [],
  });

  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8000/ws");
    ws.current.onopen = () => console.log("WebSocket connected");
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "video_ready") {
        const url = `http://localhost:8000/videos/${data.message}`;
        console.log(data.message);

        setGlobals((prev) => ({
          ...prev,
          queue: [...prev.queue, url],
        }));
      }
    };

    ws.current.onclose = () => console.log("WebSocket disconnected");
    return () => ws.current.close();
  }, []);

  async function editGlobalData(command) {
    if (command.cmd == "UpdateQueue") {
      setGlobals((prev) => ({
        ...prev,
        queue: prev.queue.slice(1),
      }));
    }

    if (command.cmd == "SendText") {
      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(command.newVal),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
    }
  }

  const context = {
    updateGlobals: editGlobalData,
    theGlobalObject: globals,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
