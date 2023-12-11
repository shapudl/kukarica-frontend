import React, { useState } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";

function AuthForm() {

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode")  === "login";

  let secondModeText = isLogin ? 'Create new user' : 'Login';
  let secondMode = isLogin ? "signup" : "login"; 


  return (
    <>
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
        <div className="actions">
          <Link to={`?mode=${secondMode}`} type="button">
            {secondModeText}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
