import MicrophoneButton from "@/components/buttons/MicrophoneButton";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import classes from "../styles/index.module.css"
import { FaMicrophoneAlt } from "react-icons/fa";


function HomePage() {
  return (
    <div className={classes.home}>
      <VideoPlayer />
      <MicrophoneButton icon={<FaMicrophoneAlt />}/>
    </div>
  );
}

export default HomePage;