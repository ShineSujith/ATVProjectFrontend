import MicrophoneButton from "../components/buttons/MicrophoneButton";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import classes from "../styles/index.module.css";
import { FaMicrophoneAlt } from "react-icons/fa";
import TextInputArea from "../components/textComponents/TextInputArea";
import DropDown from "../components/textComponents/DropDown";
import { useState } from "react";

function HomePage() {
  const [options, setoptions] = useState("speech");

  function handleOptions(value) {
    setoptions(value);
  }

  return (
    <div className={classes.home}>
      <VideoPlayer />
      <DropDown onSelectOption={handleOptions} />
      {options === "speech" ? (
        <MicrophoneButton icon={<FaMicrophoneAlt />} />
      ) : (
        <TextInputArea />
      )}
    </div>
  );
}

export default HomePage;
