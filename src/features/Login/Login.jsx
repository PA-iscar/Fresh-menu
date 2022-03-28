import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

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
  padding: 34px 18px;
  height: 299px;
  border-radius: 3px;
  width: 320px;
  box-sizing: border-box;
`;
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
    outline: 1px solid #fbb100;
  }
  ::placeholder {
    color: #9b9b9b;
  }
`;
const ErrorMessage = styled.div`
  outline: 1.5px solid red;
  background: #fff;
  color: #f00;
  display: inline;
  width: fit-content;
  // height: 50%;
  padding: 5px 20px;
  position: absolute;
  z-index: 11;
  top: 8px;
  left: 300px;
  font-weight: bold;
  border-radius: 3px;

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
const Send = styled.div`
  border-radius: 3px;
  margin: 15px 0px;
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
const Signup = styled.div`
  display: inline-block;
`;
const SignupButton = styled.div`
  display: inline-block;
  color: #e85826;
  font-weight: bold;
  text-decoration: underline;
`;

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const username = useRef();
  const handleClick = () => {
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
      setIsError(true);
      setErrorMessage("Invalid data entered.");
    } else {
      setIsError(false);
      setErrorMessage("");
      const payload = { isEmail, isPhone, value: username.current.value };
      checkUser(payload);
    }
  };

  const checkUser = (payload) => {
    console.log(payload);
    setIsError(true);
    setErrorMessage("User not registered");
  };

  useEffect(() => {}, [isError]);

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
          <OrWrapper>OR</OrWrapper>
          <InputWrapper>
            <Input
              placeholder="Mobile Number / Email ID"
              autoFocus
              ref={username}
              onChange={() => {
                setIsError(false);
                setErrorMessage("");
              }}
            />
            {isError ? <ErrorMessage>{errorMessage}</ErrorMessage> : <></>}
          </InputWrapper>
          <Send onClick={handleClick}>Send OTP</Send>
          <Hr />
          <Signup>
            Don't have an account?{" "}
            <Link to="/">
              <SignupButton>Sign up</SignupButton>
            </Link>
          </Signup>
        </Modal>
      </ModalWrapper>
    </>
  );
};

export default Login;
