import classes from "./SideBarTabs.module.css"

export default function SideBarTabs(props) {

  return (
    <div className={classes.mainDiv}>
        {props.icon != undefined && (
            <div className={classes.iconDiv}>{props.icon}</div>
        )}
        <div className={classes.textDiv}>
            <p className={classes.mainText}>{props.text}</p>
        </div>
    </div>
  )
}