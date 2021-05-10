import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUserToDB, loginUserUserToDB, getUser } from "../../action";
import { useStateValue } from "../../stateProvider";
function Login() {
  const [{}, dispatch] = useStateValue();
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [lessPasswordError, setLessPasswordError] = useState(false);
  const [userError, setUserError] = useState(false);
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  // register user
  const registerUser = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setPasswordMatchError(true);
      setTimeout(() => {
        setPasswordMatchError(false);
      }, 5000);
    } else if (password.length < 6) {
      setLessPasswordError(true);
      setTimeout(() => {
        setLessPasswordError(false);
      }, 5000);
    } else {
      try {
        const result = await registerUserToDB(email, name, password);
        await getUser(dispatch);
        history.push("todo");
      } catch (err) {
        setUserError(true);
      }
    }
  };
  // login user
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUserUserToDB(loginEmail, loginPassword);
      await getUser(dispatch);
      history.push("todo");
    } catch (err) {
      console.log(err);
      setErrorLogin(true);
      setTimeout(() => {
        setErrorLogin(false);
      }, 5000);
    }
  };
  return (
    <div className="login">
      {isRegister && (
        <form onSubmit={registerUser} className="register-form">
          <h5>Register</h5>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirmPassword"
              type="password"
            />
          </div>
          <div className="error">
            {passwordMatchError && <span>Password must be match !!</span>}
            {lessPasswordError && (
              <span>Password must be atleast 6 characters !!</span>
            )}
            {userError && <span>user is already exist</span>}
          </div>
          <button className="btn-register">Register</button>
          <button onClick={() => setIsRegister(false)} className="btn-register">
            Sign in
          </button>
        </form>
      )}
      {!isRegister && (
        <form onSubmit={loginUser} className="register-form">
          <h5>Login</h5>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setLoginEmail(e.target.value)}
              id="email"
              type="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setLoginPassword(e.target.value)}
              id="password"
              type="password"
            />
          </div>
          <div className="error">
            {errorLogin && <span>Invalid Email or password !</span>}
          </div>
          <button className="btn-register">Sign in</button>
          <button onClick={() => setIsRegister(true)} className="btn-register">
            Register
          </button>
        </form>
      )}
    </div>
  );
}
export default Login;
