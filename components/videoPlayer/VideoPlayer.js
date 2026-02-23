import classes from "./VideoPlayer.module.css";
import { useState, useRef, useEffect, useContext } from "react";
import GlobalContext from "../../store/globalContext";

function VideoPlayer() {
  const globalCtx = useContext(GlobalContext);
  const videoRef = useRef(null);
  const [current, setCurrent] = useState(null);

  // Start playing when idle
  useEffect(() => {
    if (!current && globalCtx.theGlobalObject.queue.length > 0) {
      setCurrent(globalCtx.theGlobalObject.queue[0]);
      setQueue((q) => q.slice(1));
    }
  }, [globalCtx.theGlobalObject.queue, current]);

  const handleEnded = () => {
    if (globalCtx.theGlobalObject.queue.length > 0) {
      setCurrent(globalCtx.theGlobalObject.queue[0]);
      setQueue((q) => q.slice(1));
    } else {
      setCurrent(null);
    }
  };

  return(
      <div className={classes.container}>
          <video controls preload="auto" ref={videoRef} src={current} autoPlay onEnded={handleEnded}>
              <source src="test.mp4" type="video/mp4"/> {/*TODO: replace this test video with websocket sent video*/}
          </video>
      </div> 
  );
}

export default VideoPlayer;
