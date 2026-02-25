import classes from "./TextInputArea.module.css";
import { useState } from "react";

function TextInputArea() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    // TODO: Call store endpoint to send text to the backend
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <textarea
          className={classes.textBox}
          maxLength={150}
          minLength={1}
          onChange={handleChange}
          placeholder="Enter Text..."
        />
      </label>
    </form>
  );
}

export default TextInputArea;
