import React, { useState } from "react";
import "./Register.css";
import logo from "./Images/WallStreet.jpeg";
import { useNavigate } from "react-router-dom";

function Register() {
  // let [name, setName] = useState("");
  // let [userName, setuserName] = useState("");
  // let [email, setemail] = useState("");
  // let [mobileNumber, setmobileNumber] = useState("");
  // for this onChange{(e)=>setName(e.target.value)}, value = {name}, name atributte not required.

  // We use both methods to write multiple useState.
  let [data, setData] = useState({
    name: "",
    userName: "",
    email: "",
    mobileNumber: "",
  });
  let [isChecked, setIsChecked] = useState(false);
  let [error, setError] = useState(false);
  let [error1, setError1] = useState(false);
  let [error2, setError2] = useState(false);
  let [error3, setError3] = useState(false);
  let [error4, setError4] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var emailRedex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mobileNumberRedux = /^[6-9]\d{9}$/;
    if (data.name.length == 0) {
      setError(true);
    }
    if (data.userName.length == 0) {
      setError1(true);
    }
    if (!data.email.match(emailRedex)) {
      setError2(true);
    }
    if (!data.mobileNumber.match(mobileNumberRedux)) {
      setError3(true);
    }

    if (isChecked == false) {
      setError4(true);
    } else {
      // To store single data in localStorage.
      // localStorage.setItem("name", data.name);
      // localStorage.setItem("userName", data.userName);
      // localStorage.setItem("Email", data.email);
      // localStorage.setItem("mobileNumber", data.mobileNumber);

      // To store multiple data in LocalStorage 
      window.localStorage.setItem("userData",JSON.stringify(data))
      navigate("/choice");
    }
  };

  return (
    <>
      <div className="home">
        <img src={logo} alt="Page Logo" className="logo" />

        <div className="registerForm">
          <h1>Wall Street</h1>
          <h3>Create your new account </h3>
          <form action="" className="form">
            <div className="inputs">
              <input
                type="text"
                placeholder="Name"
                className="input"
                value={data.name}
                name="name"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
              {error ? (
                <label htmlFor="Validation">Enter valid name</label>
              ) : (
                " "
              )}
            </div>
            <div className="inputs">
              <input
                type="text"
                placeholder="UserName"
                className="input"
                value={data.userName}
                name="userName"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
              {error1 ? (
                <label htmlFor="Validation">Enter valid UserName</label>
              ) : (
                ""
              )}
            </div>
            <div className="inputs">
              <input
                type="text"
                placeholder="Email"
                className="input"
                value={data.email}
                name="email"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
              {error2 ? (
                <label htmlFor="Validation">Enter valid Email</label>
              ) : (
                ""
              )}
            </div>
            <div className="inputs">
              <input
                type="text"
                placeholder="MobileNumber"
                className="input"
                value={data.mobileNumber}
                name="mobileNumber"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
              {error3 ? (
                <label htmlFor="Validation">Enter valid MobileNumber</label>
              ) : (
                ""
              )}
            </div>
            <div className="inputs">
              <div className="checkBox">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <h5>Share my registration data with Wall Street</h5>
              </div>
              {error4 ? (
                <label htmlFor="validation">
                  Check this box if you want to proceed
                </label>
              ) : (
                ""
              )}
            </div>
            <button onClick={handleSubmit}>SIGN UP</button>
            {/* <Link to="/choice" ><button onClick={handleSubmit}>SIGN UP</button></Link> */}
            <h5>
              By clicking on Sign up. you agree to Wall Street{" "}
              <span>Terms and Conditions of Use</span>{" "}
            </h5>
            <h5>
              To learn more about how Wall Street collects, uses, shares and
              protects your personal data please head Wall Street{" "}
              <span>Privacy Policy</span>
            </h5>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
