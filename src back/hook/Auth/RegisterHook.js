import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser } from "../../redux/actions/authAction";
import { NotificationManager } from "react-notifications";
import notify from "../useNotifaction";
function RegisterHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const errors = useSelector((state) => state.authReducer.errors);
  const res = useSelector((state) => state.authReducer.createUser);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const validationValues = () => {
    let isValid = true;
    if (name === "") {
      notify("Please enter a username", "error");
      isValid = false;
    } else if (email === "") {
      notify("Please enter an email address", "error");
      isValid = false;
    } else if (!validateEmail(email)) {
      notify("Please enter a valid email address", "error");
      isValid = false;
    } else if (phone.length < 10) {
      notify("Please enter a valid phone number", "error");
      isValid = false;
    } else if (phone === "") {
      notify("Please enter a phone number", "error");
      isValid = false;
    } else if (password.length < 6) {
      notify("Password should be at least 6 characters long", "error");
      isValid = false;
    } else if (password !== confirmPassword) {
      notify("Passwords do not match", "error");
      isValid = false;
    }

    return isValid;
  };

  //save data
  const OnSubmit = async () => {
    const isValid = validationValues();
    if (!isValid) {
      return;
    }
    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res ) {
        if (res.data.token && res.data) {
          localStorage.setItem("token", res.data.token);
          notify("Successfully registered", "success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          if (res.data.errors.length >= 1) {
            res.data.errors.map((error) => {
              notify(error.msg, "error");
            });
          }
        }
        }
    } else {
      if (!navigator.onLine) {
        notify("Please check your internet connection", "error");
      }
    }
  }, [loading, errors, res]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ];
}

export default RegisterHook;
