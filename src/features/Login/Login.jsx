import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import newOTP from "otp-generators";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
  `;
const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #9b9b9b;
  font-size: 12px;
  letter-spacing: 0.8px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(235, 235, 235, 0.75);
`;
const Modal = styled.div`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  background: white;
  padding: 34px 18px 18px;
  height: fit-content;
  border-radius: 3px;
  width: 320px;
  box-sizing: border-box;
`;

const LoginWrapper = styled.div``;
const SignupWrapper = styled.div``;

const OauthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
const Oauth = styled.div`
  display: inline-block;
  width: 100%;
  height: 30px;
  border-radius: 2px;
`;
const Facebook = styled.div`
  background: #4f73bb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 21px;
  border-radius: 2px;
  transition-duration: 0.2s;
  &:hover {
    background: #455d86;
  }
`;
const Google = styled.img`
  width: 104%;
  position: relative;
  top: -2px;
  left: -2px;
`;

const OrWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0px;
  &:before {
    content: "";
    height: 1px;
    width: 70px;
    display: inline-block;
    background: rgba(209, 210, 217, 0.5);
    margin-right: 20px;
  }
  &:after {
    content: "";
    height: 1px;
    width: 70px;
    display: inline-block;
    background: rgba(209, 210, 217, 0.5);
    margin-left: 20px;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Input = styled.input`
  border: 1px solid rgba(209, 210, 217, 0.5);
  border-radius: 3px;
  width: 100%;
  height: 40px;
  padding: 10px;
  letter-spacing: 0.4px;
  box-sizing: border-box;
  &:focus {
    outline: 0px;
    border: 1px solid #fbb100;
  }
  ::placeholder {
    color: #9b9b9b;
  }
`;
const InputContainer = styled.div`
  position: relative;
`;
const ErrorMessage = styled.div`
  outline: 1.5px solid #f7295a;
  background: #fff;
  color: #f7295a;
  display: inline;
  width: 180px;
  text-align: center;
  line-height: 18px;
  // height: 50%;
  padding: 5px;
  position: absolute;
  z-index: 11;
  // top: 8px;
  left: 292px;
  font-weight: bold;
  border-radius: 3px;
  box-shadow: 0 5px 10px 5px rgb(164 175 182 / 21%),
    0 2px 4px 0 rgb(164 175 182 / 43%);

  &:before {
    top: 20px;
    right: 100%;
    width: 0;
    position: absolute;
    height: 0;
    content: "";
    margin-top: -11px;
    border-right: 5px solid #f7295a;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  &:after {
    top: 20px;
    right: 100%;
    width: 0;
    position: absolute;
    height: 0;
    content: "";
    margin-top: -10px;
    border-right: 4px solid #fff;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
`;
const Button = styled.div`
  border-radius: 3px;
  background: linear-gradient(to right, #f5914e, #e85826);
  height: 42px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    box-shadow: 0 1px 3px 1px rgb(0 0 0 / 30%);
  }
`;
const Hr = styled.hr`
  margin: 20px 0px;
  border: 0px solid red;
  border-bottom: 1px solid rgba(209, 210, 217, 0.5);
`;
const FeatureSwapWrapper = styled.div`
  display: inline-block;
`;
const FeatureSwapButton = styled.div`
  cursor: pointer;
  display: inline-block;
  color: #e85826;
  font-weight: bold;
  text-decoration: underline;
`;
const OTPWrapper = styled.div`
  // outline: 1px solid pink;
`;
const VMessage = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: #000;
  line-height: 20px;
`;
const OTPContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  position: relative;
`;
const OTPInput = styled(Input)`
  outline: 0px;
  border: 0px;
  border-radius: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  display: inline;
  font-size: 20px;
  text-align: center;
  color: #9b9b9b;

  &:focus {
    border: 0px;
    border-bottom: 1px solid #e85826;
  }
`;
const ResendWrapper = styled.div`
  text-align: center;
  font-size: 13px;
`;
const Resend = styled.div`
  color: #e85826;
  font-weight: bold;
  font-size: 12px;
  margin-top: 8px;
`;

const Login = () => {
  const [feature, setFeature] = useState("login");
  const [OTP, setOTP] = useState("");
  const [userOTP, setUserOTP] = useState("nnnnn");
  const [isOTPError, setIsOTPError] = useState(false);
  const [resendTime, setResendTime] = useState(15);
  const [OTPErrorMessage, setOTPErrorMessage] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [signupfNameError, setSignupfNameError] = useState(false);
  const [signuplNameError, setSignuplNameError] = useState(false);
  const [signupphoneError, setSignupphoneError] = useState(false);
  const [signupemailError, setSignupemailError] = useState(false);
  const [signuppassError, setSignuppassError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [payload, setPayload] = useState({});
  const username = useRef();

  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();
  const otp5 = useRef();

  const fName = useRef();
  const lName = useRef();
  const phone = useRef();
  const email = useRef();
  const pass = useRef();

  const validateUser = () => {
    var value = username.current.value;
    const isEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ? true
      : false;
    var isPhone = false;
    if (!isEmail) {
      if (value.length === 10) {
        value = Number(value);
        if (!isNaN(value)) {
          isPhone = true;
        }
      }
    }
    if (!isEmail && !isPhone) {
      setLoginError(true);
      setErrorMessage("Invalid data.");
    } else {
      setLoginError(false);
      setErrorMessage("");
      setPayload({ isEmail, isPhone, value: username.current.value });
      sendOTP(payload);
    }
  };

  const sendOTP = (payload) => {
    setResendTime(15);
    setOTP(
      newOTP.generate(5, {
        alphabets: false,
        upperCase: false,
        specialChar: false,
      })
    );
    setUserOTP(() => {
      return `nnnnn`;
    });
  };

  const validateOTP = () => {
    if (otp1.current.value !== "") {
      otp2.current.focus();
    }
    if (otp2.current.value !== "") {
      otp3.current.focus();
    }
    if (otp3.current.value !== "") {
      otp4.current.focus();
    }
    if (otp4.current.value !== "") {
      otp5.current.focus();
    }
    if (otp5.current.value !== "") {
      otp5.current.blur();
    }
    setIsOTPError(false);
    setOTPErrorMessage("");
    setUserOTP(() => {
      return `${otp1.current.value ? otp1.current.value : "n"}${
        otp2.current.value ? otp2.current.value : "n"
      }${otp3.current.value ? otp3.current.value : "n"}${
        otp4.current.value ? otp4.current.value : "n"
      }${otp5.current.value ? otp5.current.value : "n"}`;
    });
  };

  const login = () => {
    if (OTP !== userOTP) {
      setIsOTPError(true);
      setOTPErrorMessage("Invalid OTP");
    } else {
      setIsOTPError(false);
      setOTPErrorMessage("");
      window.alert("Loggedin");
    }
  };

  const signup = () => {
    let err = false;
    console.log("Here");
    if (fName.current.value === "") {
      setSignupfNameError(true);
      err = true;
    } else {
      setSignupfNameError(false);
    }
    if (
      phone.current.value.length !== 10 ||
      isNaN(Number(phone.current.value))
    ) {
      setSignupphoneError(true);
      err = true;
    } else {
      setSignupphoneError(false);
    }
    if (!email.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setSignupemailError(true);
      err = true;
    } else {
      setSignupemailError(false);
    }
    if (pass.current.value.length < 4) {
      setSignuppassError(true);
      err = true;
    } else {
      setSignuppassError(false);
    }
    if (err) {
      return;
    }
    window.alert("Sign up Success, click ok to continue");
    resetModal();
  };

  const resetModal = () => {
    setFeature("login");
    setOTP("");
    setUserOTP("nnnnn");
    setIsOTPError(false);
    setResendTime(15);
    setOTPErrorMessage("");
    setLoginError(false);
    setErrorMessage("");
    setPayload({});
  };

  useEffect(() => {
    console.log(OTP);
    if (OTP !== "") {
      const intervalid = setInterval(() => {
        setResendTime((prev) => {
          if (prev <= 0) {
            clearInterval(intervalid);
            return prev;
          }
          if (prev > 0) {
            return Number(prev) - 1;
          } else {
            clearInterval(intervalid);
          }
        });
      }, 1000);
      return () => clearInterval(intervalid);
    }
  }, [OTP]);

  return (
    <>
      <GlobalStyle />
      <ModalWrapper>
        <Modal>
          <OauthWrapper>
            <Oauth>
              <Link to="/">
                <Facebook>
                  <FaFacebookF fill="white" />
                </Facebook>
              </Link>
            </Oauth>
            <Oauth>
              <Link to="/">
                <Google src="./google_signin.png" alt="" />
              </Link>
            </Oauth>
          </OauthWrapper>
          <OrWrapper>OR{feature === "login" ? "" : " USE EMAIL"}</OrWrapper>
          {feature === "login" ? (
            <LoginWrapper>
              {OTP === "" ? (
                <InputWrapper>
                  <Input
                    placeholder="Mobile Number / Email ID"
                    autoFocus
                    ref={username}
                    onChange={() => {
                      setLoginError(false);
                      setErrorMessage("");
                    }}
                  />
                  {loginError ? (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                  ) : (
                    <></>
                  )}
                  <Button onClick={validateUser}>Send OTP</Button>
                </InputWrapper>
              ) : (
                <OTPWrapper>
                  <VMessage>
                    We have sent a verification code to {payload.value} via{" "}
                    {payload.isEmail ? "Email" : "SMS"}. Please enter it below.
                  </VMessage>
                  <InputWrapper>
                    <OTPContainer>
                      <OTPInput
                        autoFocus
                        onChange={validateOTP}
                        ref={otp1}
                      ></OTPInput>
                      <OTPInput onChange={validateOTP} ref={otp2}></OTPInput>
                      <OTPInput onChange={validateOTP} ref={otp3}></OTPInput>
                      <OTPInput onChange={validateOTP} ref={otp4}></OTPInput>
                      <OTPInput onChange={validateOTP} ref={otp5}></OTPInput>
                      {isOTPError ? (
                        <ErrorMessage>{OTPErrorMessage}</ErrorMessage>
                      ) : (
                        <></>
                      )}
                    </OTPContainer>
                    <Button onClick={login}>Log In</Button>
                  </InputWrapper>
                  <ResendWrapper>
                    {resendTime > 0 ? (
                      <Resend>Resend code in 00:{resendTime}</Resend>
                    ) : (
                      <>
                        <div style={{ margin: "8px 0px" }}>
                          Didn't receive code?
                        </div>
                        <Resend style={{ cursor: "pointer" }} onClick={sendOTP}>
                          Resend Code
                        </Resend>
                      </>
                    )}
                  </ResendWrapper>
                </OTPWrapper>
              )}
            </LoginWrapper>
          ) : (
            <SignupWrapper>
              <InputWrapper>
                <InputContainer>
                  <Input
                    placeholder="First Name"
                    autoFocus
                    ref={fName}
                    onChange={() => {
                      setSignupfNameError(false);
                    }}
                  />
                  {signupfNameError ? (
                    <ErrorMessage>Please enter a valid first name</ErrorMessage>
                  ) : (
                    <></>
                  )}
                </InputContainer>
                <Input
                  placeholder="Last Name"
                  ref={lName}
                  onChange={() => {
                    setSignuplNameError(false);
                  }}
                />
                {signuplNameError ? <ErrorMessage>Error</ErrorMessage> : <></>}
                <InputContainer>
                  <Input
                    placeholder="10 Digit Mobile Number"
                    ref={phone}
                    onChange={() => {
                      setSignupphoneError(false);
                    }}
                  />
                  {signupphoneError ? (
                    <ErrorMessage>
                      Please enter a valid 10 digit mobile number.
                    </ErrorMessage>
                  ) : (
                    <></>
                  )}
                </InputContainer>
                <InputContainer>
                  <Input
                    placeholder="Email"
                    ref={email}
                    onChange={() => {
                      setSignupemailError(false);
                    }}
                  />
                  {signupemailError ? (
                    <ErrorMessage>
                      Please enter a valid email address.
                    </ErrorMessage>
                  ) : (
                    <></>
                  )}
                </InputContainer>
                <InputContainer>
                  <Input
                    placeholder="Password"
                    ref={pass}
                    onChange={() => {
                      setSignuppassError(false);
                    }}
                  />
                  {signuppassError ? (
                    <ErrorMessage>
                      Please enter a valid password. 4 characters min.
                    </ErrorMessage>
                  ) : (
                    <></>
                  )}
                </InputContainer>
                <Button onClick={signup}>Sign up</Button>
              </InputWrapper>
            </SignupWrapper>
          )}
          <Hr />
          {feature === "login" ? (
            <FeatureSwapWrapper>
              Don't have an account?{" "}
              <FeatureSwapButton
                onClick={() => {
                  setFeature("signup");
                }}
              >
                Sign up
              </FeatureSwapButton>
            </FeatureSwapWrapper>
          ) : (
            <FeatureSwapWrapper>
              Already have an account?{" "}
              <FeatureSwapButton
                onClick={() => {
                  setFeature("login");
                }}
              >
                Log in
              </FeatureSwapButton>
            </FeatureSwapWrapper>
          )}
        </Modal>
      </ModalWrapper>
    </>
  );
};

export default Login;
