import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
import notify from "./../useNotifaction";

function LoginHook() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const res = useSelector((state) => state.authReducer.loginUser);
  const [isPress, setIsPress] = useState(false);
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const validationValues = () => {
    let isValid = true;
    if (email === "") {
      notify("Please enter an email address", "error");
      isValid = false;
    } else if (!validateEmail(email)) {
      notify("Please enter a valid email address", "error");
      isValid = false;
    } else if (password === "") {
      notify("Please enter a password", "error");
      isValid = false;
    }

    return isValid;
  };

  const OnSubmit = async () => {
    setIsPress(true);
    const isValid = validationValues();
    if (!isValid) {
      return;
    }
    await dispatch(loginUser({ email, password }));
    setLoading(false);
    setIsPress(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data && res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          notify("Login successful", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          if (res.data.errors) {
            res.data.errors.map((error) => {
              notify(error.msg, "error");
            });
          } else {
            notify(res.data.message, "error");
          }
        }
      }
      setLoading(true);
    }
  });
  return [email, password, onChangePassword, onChangeEmail, OnSubmit, isPress];
}
export default LoginHook;
