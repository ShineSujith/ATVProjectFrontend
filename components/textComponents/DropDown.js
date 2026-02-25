import classes from "./DropDown.module.css";

function DropDown(props) {
  function handleChange(e) {
    props.onSelectOption(e.target.value);
  }

  return (
    <label>
      <select className={classes.dropDown} onChange={handleChange}>
        <option value="speech">Speech</option>
        <option value="text">Text</option>
      </select>
    </label>
  );
}

export default DropDown;
