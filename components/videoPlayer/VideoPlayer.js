import classes from "./VideoPlayer.module.css";
import { useState, useRef, useEffect } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8000/ws");

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "video_ready") {
        const url = `http://localhost:8000/videos/${data.filename}`;
        console.log(data.filename);

        setQueue((q) => [...q, url]);
      }
    };

    return () => ws.current.close();
  }, []);

  // Start playing when idle
  useEffect(() => {
    if (!current && queue.length > 0) {
      setCurrent(queue[0]);
      setQueue((q) => q.slice(1));
    }
  }, [queue, current]);

  const handleEnded = () => {
    if (queue.length > 0) {
      setCurrent(queue[0]);
      setQueue((q) => q.slice(1));
    } else {
      setCurrent(null);
    }
  };

  return (
    <div className={classes.container}>
      <video
        width="740"
        height="500"
        preload="auto"
        controls
        ref={videoRef}
        src={current}
        autoPlay
        onEnded={handleEnded}
      />
    </div>
  );
}

export default VideoPlayer;
