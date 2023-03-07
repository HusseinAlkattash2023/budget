import React from "react";

// react-router-dom import
import { Form, NavLink } from "react-router-dom";

// assets
import logomark from "../assets/logomark.svg";

// react icons
import { FaTrashAlt } from "react-icons/fa";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go To Home">
        <img src={logomark} alt="" />
        <span>HomeBudget</span>
      </NavLink>
      {
        userName && (
            <Form method="post" action="/logout" onSubmit={(e) => {
                if(!confirm("Delete use and all data?")){
                    e.preventDefault()
                }
            }}>
                <button className="btn btn--warning">
                    <span>Delete User</span>
                    <FaTrashAlt/>
                </button>
            </Form>
        )
      }
    </nav>
  );
};

export default Nav;
