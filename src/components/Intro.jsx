import React from "react";
import { Form } from "react-router-dom";

import illustration from '../assets/illustration.jpg'


//library
import { FaUserPlus } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Controle of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is is the secret to financial freedom. Start your
          joutney tody.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <FaUserPlus/>
          </button>
        </Form>
      </div>
      <img src={illustration} alt="" width={600}/>
    </div>
  );
};

export default Intro;
