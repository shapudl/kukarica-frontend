import React, { useState } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import KButton from "./Styled/Button";

function AuthForm() {

  const KFormCard = styled.div`
  
    background-color: var(--color-white);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    width: 50%;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    align-items: center;
    text-align: center;

    & p {
      display: flex;
      flex-direction: column;
      align-items: center;

      text-transform: uppercase;
      font-size: 0.75em;
    } 
  `;

  const KActions = styled.div`
    display:flex;
  `;

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode")  === "login";

  let secondModeText = isLogin ? 'Create new user' : 'Login';
  let secondMode = isLogin ? "signup" : "login"; 


  return (
    <KFormCard>
      <Form method="post" className="form">
        <h1>{ isLogin ? 'Log in' : 'Create a new user'}</h1>
        { !isLogin && <p>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required />
        </p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <KActions>
          <KButton>
            <Link to={`?mode=${secondMode}`} type="button">
              {secondModeText}
            </Link>
          </KButton>
          <KButton>Save</KButton>
        </KActions>
      </Form>
    </KFormCard>
  );
}

export default AuthForm;
