import { Link } from "react-router-dom";
import home from "../../../assets/home.png";
import { useState, useEffect } from "react";
import "./login.css";
import PasswordField from "../PasswordField";
import { useNavigate } from "react-router-dom";
import { useAuthenticationContext, useUserContext } from "../../../Context";
import axios from "axios";
import { useDocumentTitle } from "../../../Hooks/useDocumentTitle";

export function Login() {
  const initialFormData = { email: "", password: "" };
  const navigate = useNavigate();
  const { setLogin } = useAuthenticationContext();
  const [testUser, setTestUser] = useState(false);
  const [loginForm, setLoginForm] = useState(initialFormData);
  const [errorData, setErrorData] = useState("");
  const { userDispatch } = useUserContext();
  const { email, password } = loginForm;

  useDocumentTitle("Login | PureFitness");
  useEffect(() => {
    if (testUser) loginSubmitHandler();
  }, [testUser, loginForm]);

  function loginFormHandler(e) {
    const { name, value } = e.target;
    if (errorData) setErrorData("");
    setLoginForm((oldFormData) => ({ ...oldFormData, [name]: value }));
  }

  function testUserHandler() {
    setLoginForm((prev) => ({
      ...prev,
      email: "ramanjoshi1999@gmail.com",
      password: "Raman@123",
    }));
    setTestUser(true);
  }

  function loginSubmitHandler(e) {
    e?.preventDefault();

    (async () => {
      try {
        const { data } = await axios.post("/api/auth/login", {
          email,
          password,
        });
        if (data.encodedToken) {
          localStorage.setItem("token", data.encodedToken);
          setLogin(true);
          userDispatch({
            type: "SHOW_TOAST",
            payload: "Logged In Successfully",
          });
          navigate("/");
        } else {
          setErrorData("Email or Password is  invalid");
        }
      } catch (err) {
        err.response.status === 500
          ? setErrorData("Can't connect to server ,Try again later")
          : setErrorData("Email or Password is  invalid");
      }
    })();
  }
  return (
    <section className="section-login txt-center flex-box">
      <img className="home-image" src={home} alt="logo" />

      <form
        className="form-container flex-column"
        onSubmit={loginSubmitHandler}
      >
        <h3 className="title">Login</h3>

        <div className="input-container">
          <div className="input-box">
            <span className="txt-icon txt-bgDark">
              <i className="fas fa-envelope fa-lg"></i>
            </span>
            <input
              className="txt-input"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={loginForm.email}
              onChange={loginFormHandler}
            />
          </div>
          <div className="input-box">
            <span className="txt-icon txt-bgDark">
              <i className="fas fa-lock fa-lg"></i>
            </span>
            <PasswordField
              name="password"
              placeholder={"Enter your password"}
              formHandler={loginFormHandler}
              value={loginForm.password}
            />
          </div>
        </div>
        {errorData && (
          <div className="txt-bgFailure">
            <i className="fas fa-exclamation-circle "></i>
            {errorData}{" "}
          </div>
        )}

        <div className="flex-column">
          <button type="submit" className="link btn bg-theme txt-white l-sp-2">
            LOGIN
          </button>
          <button
            type="button"
            onClick={testUserHandler}
            className="btn btn-test-user txt-theme l-sp-2"
          >
            Login with Test Credential
          </button>
          <p className="login-txt">
            <span className="txt-gray">Not a user yet ? </span>
            <Link to="/signup" className="link theme-shade-2 bd-bottom">
              Create your account
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
