import React, { useState, useEffect } from "react";

function Loginpage({loginPass,setLoginPass}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  console.log(loginPass);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = document.querySelector("#email").value;
    const passwordValue = document.querySelector("#password").value;

    setPassword(passwordValue);
    setEmail(emailValue);
  };

  const loginControl = () => {
    if (email === "keypoint@gmail.com" && password === "1234567") {
      setLoginPass(true);
      
      const emailAndPassword = [email, password];
      const localStorageEmailAndPassword = JSON.stringify(emailAndPassword);

      localStorage.setItem("keypointToken", localStorageEmailAndPassword);
    } else if (email === "" && password === "") {
      setLoginPass(null);
    } else {
      setLoginPass(false);
    }
  };


  useEffect(() => {
    loginControl();
  }, [email, password]);

  return (
    <div className="container-fluid">
      <div className="row main-content bg-success text-center">
        <div className="col-md-4 text-center company__info">
          <span className="company__logo">
            <h2>
              <span className="fa fa-android"></span>
            </h2>
          </span>
          <h4 className="company_title">Your Company Logo</h4>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
          <div className="container-fluid">
            <div className="row">
              <h2>Log In</h2>
            </div>
            <div className="row">
              <form onSubmit={handleSubmit} control="" className="form-group">
                <div className="row">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form__input"
                    placeholder="Email"
                    autoFocus
                    required
                  />
                </div>
                <div className="row">
                  <span className="fa fa-lock"></span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form__input"
                    placeholder="Password"
                    required
                  />
                </div>
                <div
                  className={`${
                    email !== "" && !email.includes("@")
                      ? "text-danger d-block"
                      : "d-none"
                  }`}
                >
                  *Please correct your E-mail address.
                </div>
                <div
                  className={`${
                    password !== "" && password.length < 7
                      ? "text-danger d-block"
                      : "d-none"
                  }`}
                >
                  *Password must be longer than 6 letters.
                </div>
                <div
                  className={`${
                    loginPass !== null && loginPass === false
                      ? "text-danger d-block"
                      : "d-none"
                  }`}
                >
                  *Your e-mail or password is false!
                </div>
                <div>
                  <input type="submit" value="Submit" className="btn1" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
