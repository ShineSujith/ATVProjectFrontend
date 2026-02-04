import classes from "./MicrophoneButton.module.css";

export default function MicrophoneButton(props) {
  return (
    <div
      className={classes.mainDiv}
      onClick={() => props.onClickHandler()}
    >
      {props.icon != undefined && (
        <div className={classes.iconDiv}>{props.icon}</div>
      )}
    </div>
  );
}