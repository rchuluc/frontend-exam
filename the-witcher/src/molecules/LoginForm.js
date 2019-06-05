import React from "react"
import "../styles.css"
import Input from "../atoms/Input"

const LoginForm = () => {
  return (
    <div className="form-group">
      <Input label={"Email"} type={"email"} autocomplete={"on"} />
      <Input label={"Password"} type={"password"} />
      <button className="btn">login</button>
    </div>
  );
};

export default LoginForm;
