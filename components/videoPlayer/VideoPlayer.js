import classes from "./VideoPlayer.module.css"

function VideoPlayer() {
    return(
        <div className={classes.container}>
            <div className={classes.underLayer}>
                <video width="1000" height="800" controls>
                    <source src="test.mp4" type="video/mp4"/> {/*TODO: replace this test video with websocket sent video*/}
                </video>
            </div>
        </div> 
    );
}

export default VideoPlayer;