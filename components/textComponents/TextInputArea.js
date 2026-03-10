import classes from "./TextInputArea.module.css";
import { useContext, useState } from "react";
import GlobalContext from "@/store/globalContext";

function TextInputArea() {
  const [text, setText] = useState("");
  const globalCtx = useContext(GlobalContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    globalCtx.updateGlobals({ cmd: "SendText", newVal: text });
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <textarea
          className={classes.textBox}
          maxLength={150}
          minLength={1}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submitHandler(e);
            }
          }}
          placeholder="Enter Text..."
        />
      </label>
    </form>
  );
}

export default TextInputArea;
