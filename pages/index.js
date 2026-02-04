import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import classes from "../styles/index.module.css"


function HomePage() {
  return (
    <div className={classes.home}>
      <VideoPlayer />
    </div>
  );
}

export default HomePage;