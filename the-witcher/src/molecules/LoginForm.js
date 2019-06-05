import React from "react"
import "../styles.css"
import Input from "../atoms/Input"

const LoginForm = () => {
  return (
    <div>
      <Input label={"Email"} type={"email"} autocomplete={"on"} />
      <Input label={"Password"} type={"password"} />
    </div>
  );
};

export default LoginForm;
