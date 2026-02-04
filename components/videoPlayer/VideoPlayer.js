import classes from "./VideoPlayer.module.css"

function VideoPlayer() {
    return(
        <div className={classes.container}>
            <video width="740" height="500" controls>
                <source src="test.mp4" type="video/mp4"/> {/*TODO: replace this test video with websocket sent video*/}
            </video>
        </div> 
    );
}

export default VideoPlayer;